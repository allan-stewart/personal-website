# Testing HTTP Calls

Making HTTP calls to get resources or call APIs is a staple of software development.
But if you do not properly abstract the request construction and response handling from the HTTP library that you use, it can be extremely difficult to test.

Here's an example of some HTTP-related code we might find in C#:

```csharp
public User GetThatUserData(string userId)
{
    var httpClient = new HttpClient();
    var url = $"https://example.com/api/users/{userId}";
    var response = httpClient.GetAsync(url).Result;
    if (response.StatusCode != HttpStatusCode.OK)
    {
        throw new Exception($"Unexpected status code: {response.StatusCode}");
    }
    var body = response.Content.ReadAsStringAsync().Result;
    return JsonConvert.DeserializeObject<User>(body);
}
```

And a similar example in JavaScript:

```javascript
async function getThatUserData(userId) {
    const url = 'https://example.com/api/users/' + userId
    const response = await axios.get(url)
    if (response.status !== 200) {
        throw new Error('Unexpected status code: ' + response.statusCode)
    }
    return response.data
}
```

At first blush, these seem like good abstractions.
All the HTTP-related handling is contained within the function;
neither input nor output expose anything about URLs, headers, status codes, or bodies.
But they are hard to test.

Sometimes we choose to rely on integration testing for these sorts of functions.
Unfortunately, this causes our tests to rely on an external dependency.
If that server is down or failing for some unknown reason, our tests will fail even though our code is fine.
Also you may not be able to test your error paths, because you cannot control the response.
And things get even more complex when we get the idea to run our own server for testing purposes.

Depending on the language and libraries we're using, it may be possible to unit test these functions.
But even when it's possible, it is often complicated, making our tests harder to understand and maintain.

So then, when testing is difficult, we may not test those functions at all.
After all, we don't need to test the underlying HTTP library, right?
Unfortunately, this leaves an untested gap in our request and response handling.


## Abstracting Ourselves in C#

To make the code easier to test, we need to separate out the HTTP library.
Let's do this first in C#.

In the code above, the HTTP request and response are both built by calling the `GetAsync` method with a url.
To abstract the library, we can start by introducing a new interface for the piece that actually executes the HTTP calls:

```csharp
public interface IHttpExecutor
{
    Task<HttpResponseMessage> GetAsync(string url);
}

public User GetThatUserData(string userId, IHttpExecutor executor)
{
    var url = $"https://example.com/api/users/{userId}";
    var response = executor.GetAsync(url).Result;
    if (response.StatusCode != HttpStatusCode.OK)
    {
        throw new Exception($"Unexpected status code: {response.StatusCode}");
    }
    var body = response.Content.ReadAsStringAsync().Result;
    return JsonConvert.DeserializeObject<User>(body);
}
```

For this example, I've decided to use a method-based dependency injection to get the new `IHttpExecutor` into the code because it's simple to write in a blog post.
But you could use class-level injection if you prefer.
The important thing is that now we have an interface separating our code from the HTTP library.

Now we can start writing tests that utilize a test double implementation of that interface.
Then we can verify that we called the right url (by interrogating the test double)
and we can have it return whatever `HttpResponseMessage` that we want to test.
We can even throw exceptions as desired to represent timeouts or failures to connect.

But dealing with the `HttpResponseMessage` is kind of a pain.
How do we set up the response body?
It isn't obvious how to set up our own response object so that `response.Content.ReadAsStringAsync()` will succeed.
We haven't abstracted far enough from the library.

```csharp
public class HttpResponse
{
    public int StatusCode { get; set; }
    public string Body { get; set; }
}

public interface IHttpExecutor
{
    Task<HttpResponse> GetAsync(string url);
}

public User GetThatUserData(string userId, IHttpExecutor executor)
{
    var url = $"https://example.com/api/users/{userId}";
    var response = executor.GetAsync(url).Result;
    if (response.StatusCode != 200)
    {
        throw new Exception($"Unexpected status code: {response.StatusCode}");
    }
    return JsonConvert.DeserializeObject<User>(response.Body);
}
```

*Now* we can easily test our code via test doubles.
The new `HttpResponse` object is simple to instantiate with everything we need.
Of course, we'll need a real implementation of the interface if we're going to run our code outside of testing:

```csharp
public class HttpExecutor : IHttpExecutor
{
    private HttpClient httpClient = new HttpClient();

    public async Task<HttpResponse> GetAsync(string url)
    {
        var response = await httpClient.GetAsync(url);
        var body = await response.Content.ReadAsStringAsync();
        return new HttpResponse {
            StatusCode = (int)response.StatusCode,
            Body = body
        };
    }
}
```

This `GetAsync` method is hard to unit test, but it doesn't include any of the request building and response handling that was specific to our use case.
And because it is a more generic interface (doesn't specify a particular url), it becomes easier to write integration tests for it.

Over time, we can add more to our `HttpResponse` to account for things like response headers.
We may also find that we want to create an `HttpRequest` class so that we can specify HTTP request concepts like methods, headers, and body.
Then we could have a single `ExecuteAsync(HttpRequest request)` method that handles all kinds of requests.

Of course, some HTTP libraries are better than others.
Perhaps we should have just chosen something other than the built-in `HttpClient`?
If we picked something with a good interface, we could have avoided creating all these extra classes.
But the advantage of using these classes is that now we can switch the underlying implementation as needed without changing any other code.


## Going Functional in JavaScript

In the C# example, I used injection and test doubles because when I write C# I tend to use a mockist style of TDD.
The language also required us to define a bunch of types to model HTTP.
Let's modify our example JavaScript code using a more functional style.

Our testing problem fundamentally comes down to needing to test that we've correctly created the request and handled the response.
But those don't have anything to do with *executing* the HTTP call, and so they could be pure functions (no I/O).
Those are easy to test!

```javascript
function buildRequest(userId) {
    return {
        url: 'https://example.com/api/users/' + userId
    }
}

function handleResponse(response) {
    if (response.status !== 200) {
        throw new Error('Unexpected status code: ' + response.statusCode)
    }
    return response.data
}
```

Now we just need to compose those functions with our HTTP library in order to make an end-to-end call.

```javascript
async function getThatUserData(userId) {
    return handleResponse(await axios.get(buildRequest(userId).url))
}
```

The only thing untested in our new method is the `axios.get` call.
But it isn't our code, so do we really need to be testing it?
*How* we call it is untested, but that is hard to do without taking one more step to move the `axios` call behind another function:

```javascript
async function execute(request) {
    return await axios.get(request.url)
}

async function getThatUserData(userId) {
    return handleResponse(await execute(buildRequest(userId)))
}
```

As with the C# example, this `execute` method is generic enough that it is easier to test than the original function that was specific to the API we wanted to call.
Now we can think about supporting other types of requests (like POST) or replace `axios` with another library as needed.


## Conclusion

With the right abstractions, you can easily unit test your HTTP-related code.
This allows you to ensure that you are building your requests correctly, verifying things like URL construction, request headers, etc.

More importantly, you can now test how your code will handle all types of responses.
We can build confidence in how we process the data on a successful call.
Failure cases that were hard to test, like specific 400 and 500 level status codes, request timeouts, and even malformed responses are now easy to test.

This approach of abstracting hard-to-test invocations can also be used in other similar situations, such as database calls.
Abstracting libraries and other dependencies can add a lot of flexibility to your code while also making it more testable.

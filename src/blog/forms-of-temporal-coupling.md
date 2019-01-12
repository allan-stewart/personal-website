# Forms of Temporal Coupling

Coupling is an important concept in software development because it limits the ability of software to change.
Temporal coupling is a kind of coupling where code is dependent on time in some way.
It is particularly insidious because it is hard to detect unless you know what you are looking for.

There are three different forms of temporal coupling I've encountered over time.

## Sequencing

The first form of temporal coupling is when there is some kind of ordering; one thing must happen before another.
The usual example of this is a class which requires methods to be invoked in a particular order,
such as requiring some kind of `init()` to be called before you can call `act()`.

Here's a simple example:

```
var circle = new Circle();
circle.setRadius(10);
circle.getCircumference(); // throws if you haven't called setRadius() first!
```

The above example is contrived, but illustrates the point.
This type of code is fairly common, though the class and method names sometimes disguise it.

The main problem caused by this sequential type of temporal coupling is that developers must know the required order that things must be done.
If that ordering is not clear or enforced in some way, then you may end up with unexpected exceptions &mdash; or worse, bad data is passed downstream.
How is a developer to know the required order?

In some cases, like with the circle example, you can enforce a required order by moving parameters into the constructor.
Then the object starts off in a valid state, and since you can't call a method on the object before instantiating it,
the developer is prevented from doing it wrong by the language runtime or compiler requirements.
That's a common fix in the object-oriented world; alternatively you could go to a more functional style and redefine `getCircumference` to take in a radius parameter.
Or combine the two and pass in a valid circle into the function, like `getCircumfrence(new Circle(10))`.

At a class-design level, there are a number of ways to fix this problem.
But this type of coupling can also happen across classes or components in business logic.
Do you need to create an account before you can save user data to your database?
Are there events that must occur before others?
Is there a chain of events where one failure cascades down to fail the entire process?
How you design your system affects how likely it is that developers will do the right thing.

The key to sequence-type temporal coupling is making the sequences obvious or eliminating them completely.
Make it easy to avoid getting it wrong.

## Waiting

The next form of temporal coupling is when you have to wait.
Literally you are coupled to the amount of time it takes to do something, such as a database query or RESTful API call.

This happens all the time in code.
Usually we consider it in terms of how long a human user must wait for software.
Users don't like it when applications are slow (often seeming to freeze up) or when websites take a while to load.
But we must also consider how long machines must wait on other machines as this affects the design of our systems
and the difficulty of programming them.
Even if there is no user waiting on the other end, can you deliver a result fast enough for it to be valuable?

The problem of waiting is often compounded by the problems of sequencing.
A typical example is that you need to get data from an API call before you can continue.
If that API service must call another service, then you must wait at _least_ the sum of all the latency between calls.
The more you must wait, the greater the likelihood of failure &mdash; either a machine will time out or a human will give up.
In a distributed system, [out of band healing](https://www.pluralsight.com/tech-blog/eventually-consistent-patterns-out-of-band-healing)
may be a useful pattern to combat both sequencing and latency.

Unfortunately, it is hard to eliminate waiting.
Things just take time.
But you can mitigate the waiting by getting faster machines or network connections.
You can placate the user by providing feedback like a spinner, hour glass, or progress bar.
Adding fallback paths can allow you to specify how long you are willing to wait before you proceed with a default or cached value.

Waiting can also be reduced by introducing asynchronicity.
Instead of waiting for _everything_ to finish before delivering any value, you can progressively provide little bits of value.
We see this on webpages that first render with minimal data, and then make AJAX calls to load more.
Incomplete data is often "complete enough" for many purposes.

## Circumstance

The last form of temporal coupling that I'll cover is one of circumstance.
[Wikipedia](https://en.wikipedia.org/wiki/Coupling_%28computer_programming%29) defines temporal coupling as:

> When two actions are bundled together into one module just because they happen to occur at the same time.

So really, this type of temporal coupling is a byproduct of failing to notice a lack of _cohesion_.
(What discussion of coupling would be complete without a mention of cohesion, after all?)
Things that are conceptually separate have been put together, and this makes it harder to maintain the code.

If the two things are obviously different, then this problem is easy to identify and correct.
But if the two things _feel_ related then it may be harder to spot the seam between the two.
Perhaps the most complicated cases are when the coupling occurred as part of a performance optimization,
such as when looping over a large dataset.
I usually recommend applying SOLID principles and healthy refactoring to eliminate this form of coupling.

Temporal coupling born of circumstance may never become a real problem.
But being ignorant of it leads to messy codebases that slow down development.
Then if it does become a problem, it's a big problem requiring a lot of rewriting, restructuring, and refactoring.

## Loosen Temporal Coupling

As with all forms of coupling, it's really not possible to eliminate temporal coupling completely.
But if left unchecked, it can cripple your ability to change your codebase.
If you want to keep your temporal coupling low, you need to learn how to recognize its forms and apply the appropriate patterns to reduce it.

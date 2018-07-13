# Leaning into Eventual Consistency

_Originally published on Feb 23, 2018 on the [Pluralsight Tech Blog](https://www.pluralsight.com/tech-blog/leaning-into-eventual-consistency)_

Distributed systems are hard.
They have a lot of moving parts with complex interactions and are inherently multi-threaded.
To make them work, there is often some form of eventual consistency at play.
Embracing this can make software development easier.

But to embrace it, you may have to first convince yourself that _many applications do not need strict consistency._
This is not the normal mindset of a software developer.
When data is changing, we tend to think that our users are always getting the latest values. 
In reality they get old data all the time due to latency!

For an example, let's say a user is pulling up a webpage that shows how many "likes" she has on her content.
Just before her request, the number of likes went from 100 to 101.
The request hits the webserver and the code gets a number from the database.
But then, before the value can be returned to the user's browser, some other "like" is registered and increments the value to 102.
When the user sees her number of likes, it's already out of date.

When we use an ACID database (e.g. a SQL relational database), the user will get 101 back and we tend to say, "That's fine, because that was the value when the query occurred."
But if we use a BASE database (such as Cassandra), it's possible that they could get a value of 100 back.
This often makes developers uncomfortable, but in reality, there are many cases where that is good enough.

## How Good is Good Enough?

Eventually consistent systems do not yield random data.
All of the values you can get back were valid at some point in time.
So the key to determining what is "good enough" lies in determining how time sensitive each piece of data is.
Or put another way, how long are you willing to wait for a value to be consistent?

In the example above, the number of likes for a user is data that can probably tolerate variance on the order of seconds, if not minutes.
Even if a post is very popular, the user will be happy to see the numbers trending up despite getting data that is a little bit stale.
In contrast, when users post content they expect it to be displayed immediately on the page, so the tolerance there is shorter &mdash; on the order of milliseconds.

Some eventually consistent systems are able to work within these tight timeframes.
Here at Pluralsight, we have used Cassandra for some things that would normally be done in a relational database.
Dealing with Cassandra has changed how we do some of these operations, but it has been worth it for higher availability.

Eventual consistency doesn't have to mean slow.
It does mean that you need to understand the difference between the mean case and the upper percentiles.
Determine the window of time that matters for your application and then act accordingly.

## Benefit from Eventual Consistency

Once you've discovered the acceptable tolerances, then you can take advantage of it and start making decisions in your code that can make development easier.
The increased availability that comes along with most eventually consistent systems can help your uptime.
Complicated synchronous code can often be replaced by simpler asynchronous code.

For example, take a request for data where the server needs to call some other API to refresh a stale cache of data.
Instead of complicated code which has to deal with waiting for the API call and handling failures gracefully,
you could opt to just return the stale data and kick off a separate asynchronous task to call the API.
(This is basically the idea of [out of band healing](https://www.pluralsight.com/tech-blog/eventually-consistent-patterns-out-of-band-healing) which Matt posted about.)
If there are multiple APIs to consult or complicated processing logic, then the benefit increases dramatically.

Another example is to use [event sourcing](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) to correct out-of-order transactions.
Users may be able to see data as it is received, but important calculations might be deferred to longer time spans.
Credits and debits on an account might be shown as they are received, but negative balance penalties don't execute until enough time has passed that we are confident that there isn't a missing credit transaction.

Adding some eventual consistency might even be as simple as using an eventually consistent component, like a database or message broker.

## Use Wisely

As with all things in software development, leaning into eventual consistency is an exercise in tradeoffs.
Some things become easier, but other things become more difficult.
Making individual pieces of code simpler can be a huge win, but you're trading that for complexity in understanding the whole system.
Using a highly available database can give you great uptime, but can cause the development against that database to suffer.
Optimize for the system rather than a single team or service.

This is why I like the phrasing of _leaning_ into the eventual consistency.
Ideally you find places where it is already present in your system and leverage it.
Here at Pluralsight, we've found that strategically adopting eventual consistency can yield faster development of simpler pieces.
Working together, those simple, well-tested pieces combine to do complex things.

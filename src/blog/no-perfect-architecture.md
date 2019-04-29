# No Perfect Architecture

What sort of software architecture should you be implementing?
When looking at industry trends, blogs, conference talks, and the like, it is easy to think that other companies have everything figured out.
You'd be forgiven for wanting to copy the success that others are having.
But there is no perfect architecture.
Everything is a set of tradeoffs; there are only good and bad fits for a context.


## Context Matters

I often hear people argue for the adoption of a technology or practice on the basis that "[insert successful company] does it."
But you are not in the position of that other company.
You have a different context with a different business model, scale, and a myriad other important differences.
What they've done was to solve their problems which are likely different from yours.
If you're living in the arctic, don't trade in your warm coat for a swimsuit just because you heard some people in the tropics say it's "best practice."

There are some underlying problems that are common across the industry.
Instead of copying the context-specific solution from somewhere else, you should dig into the underlying ideas and principles.

For example, it seems like _everyone_ is moving from monoliths to microservices these days.
Before assuming that you also should adopt microservices, you need to understand what it would mean for you.
Decentralization of data and governance, independent deployments, automation of infrastructure and deployment pipelines, and isolating failure are key principles behind microservices.
Adoption shifts thinking from projects to products.
Observation and monitoring become critical.
Implementation details are encapsulated within services and teams.

So you ought to consider the tradeoffs and ask yourself:
* Are we experiencing the kinds of problems that microservices solve?
    * Would the independent deployments allow your teams to move faster?
    * Are you having problems scaling out?
* What new problems will microservices _cause_?
    * Is your operations team ready and willing to automate infrastructure?
    * Will your data get fragmented?
    * What will happen when a key service goes down?
* Does it align with our organizational structure or will it cause friction?
    * Do you have (or want) autonomous cross-functional teams?
    * Do you have a transformational leader who will support the needed people-restructuring efforts?
* Do our people value the cultures associated with microservices?
    * What do you believe about DevOps?
    * Can you grant trust to teams to deploy to production at any time?
* Is there another solution that fits better?

There are a lot of great things about microservices.
But it isn't a perfect architecture.
Sometimes a monolith is better.


## Change Is Inevitable

The needs of an organization change over time.
The problems your architecture solves today are likely not the same as those you will have tomorrow.
As your business changes, your architecture will need to change as well.

We recognize that the software industry changes rapidly.
New technologies or cloud services may significantly change your strategy (such as mobile, serverless stacks, or managed databases).
You may find you need to move to new languages, or adjust your architecture to accommodate a polyglot environment.
Your company may be affected by market disruption and need to pivot.
All of these can necessitate architectural evolution.

One area of change that is typically ignored is how people change within an organization.
[Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) teaches us that these "people issues" are also architecture issues.
Which key people join or leave you, management structure, skill levels, and even the number of people working together can significantly change your context.

Here at Pluralsight, our growth has created a situation very different from when we started implementing our current [bounded context architecture](https://www.pluralsight.com/tech-blog/system-architecture-bounded-contexts).
We've had some technical issues to deal with, but the majority of our struggles have been related to the increased number of teams and associated shifts in communication patterns.
Our system architecture has needed to adapt to these changes while keeping what's worked well thus far.

Although our existing architecture was critical to the success of our growth, it was not perfect.


## "It Depends"

So then, what software architecture should you be implementing?
The answer is, "It depends."
There is no single architecture that works well in all cases and at all times.
You have to customize your architecture for your needs, applying the [patterns](https://en.wikipedia.org/wiki/Architectural_pattern) that solve your problems and fit your situation best.

# Taking Change to the Limit

Software provides incredible opportunity for change.
But the difficulty and consequences vary dramatically and often proportionately to the size of the change.
So what happens as we consider taking the mathematical limit of change down to zero?

There are multiple axes on which we could measure software change, including:
lines of code, number of files, deployments, and affected customers.
For this thought experiment, we'll mainly focus on time as a proxy for the size of change.

At large scales &mdash; the kinds of changes which take from weeks to years &mdash;
change is difficult and the choices are very significant.
These choices are harder to reverse, so a poor choice can mean spending a long time working in the wrong direction.
Worse, the fear of sunk costs creates inertia against changing course.
There may be big losses.
And even if we get the choice right, it still takes time to realize the change.

As we get smaller, down from days to hours or even minutes, we encounter an inflection point.
The cost of a wrong choice diminishes, driving risk down.
We can afford to explore more options.

At this point, even arbitrary choices may be a valid strategy if the time required to evaluate options is more than a small fraction of the time it takes to just do the work.
For example, taking an hour to decide if you should restructure or rewrite may not be worth exploring if neither option takes more than 3 hours to complete anyway.
Analysis paralysis becomes very costly.

But we can go even smaller!

When change can be measured in mere seconds many of the differences between our choices lose their distinction.
At this scale, a refactoring step performed on a function or line of code may be indistinguishable from an entire rewrite of the thing.
The costs and time requirements are basically interchangeable.
The burden of the amount of work is gone, leaving all the difficulty in how you approach the problem.

This is the realm of pure knowledge work.
The decisions revolve around things like:
* functionality: does the code work properly and accomplish the intended objective?
* structure: coupling and cohesion, recursion vs iteration, etc.
* readability: are things named and organized well? Will your fellow programmers understand the code?
* abstraction: does it do one thing well? Are we conflating different concerns? Are we crossing conceptual boundaries?
* repetition: is there duplicate code? 

And of course, when the scope of change finally reaches zero, it is no longer change at all and there are no decisions to make.


## So What?

Noting that large changes are more difficult and costly than small ones is no real epiphany.
It's already known.
We understand this intuitively.

The insight I gained from thinking about this is that _the very nature of change_ itself _changes at different scales_.

Large scale software change moves the focus away from the actual code and toward other (valid and necessary) considerations.
The consequences of your choices have long-term impact and are more difficult to reverse.
But at the small scale, all the focus is on the code.
Change is easy and you have the opportunity to try many approaches.
Not only can you afford to make many small changes, but in fact this is where you should focus your efforts!

Why? Because the state of your code in the small affects your ability to make larger changes.
If you're too tightly coupled to a specific framework or database then it's very difficult to swap it out.
If you want to migrate to mobile or expand to a business adjacency, poor abstraction and duplication increases the cost.
If you have no tests then any change, large or small, can lead to bugs.

Conversely, having tests not only helps you avoid unintended bugs, but also pushes you toward better code structure.
Well considered abstractions allow you to expand existing code into new functionality or platforms.
Separating concerns limits the number of places which must change in order to swap databases or frameworks.

It is so easy to brush past the small in pursuit of the large.
To rush to get a feature complete so we can start on the next one;
all without considering how what we do now will impact what we do tomorrow.
Or to do a sloppy job and not even recognize it because we're "getting stuff done."

But the small decisions really matter as you scale up.
Free yourself from the shackles of assembly line thinking!
Knowledge work isn't about how much you get done, but how well you do it.
It's not about how much code you produce (which is actually a [liability](./delete-code.html))
but whether the software is delivering value.

Address change while it is cheap and easy.
Spend the time to make code really good, not just good enough.
Set up fast feedback loops (such as Test-Driven Development) which guide you to more flexibility at larger scales.
Install guardrails against rigidity.

Getting things right in the small makes change easier in the large.
And that's what software architecture is all about, Charlie Brown.

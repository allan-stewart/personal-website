# Resilient Programming
Conventional wisdom holds that in order to work effectively, you need to eliminate distractions.
Interruptions can be particularly bad on software developers, as described in numerous articles, blogs, and [even](https://heeris.id.au/2013/this-is-why-you-shouldnt-interrupt-a-programmer/) [comic](https://dilbert.com/strip/2017-01-05) [strips](http://www.commitstrip.com/en/2018/01/11/the-war-on-interruptions/).
But this is only one side of the equation.
Are there things one can do to be more resilient to distraction?

After all, we can never completely eliminate interruptions while coding.
Tackling the usual suspects certainly helps; we can disable message notifications, block out time on our calendars, and tell our kids, "I'm working from home and really need you to stay out of my work space."
But natural variation is sure to still interrupt us in unexpected ways.
Loud noises, internet or power outages, software bugs, meetings, and so much more are all normal parts of life.
And what about when you distract yourself?

Sometimes interruptions are important.
Maybe you _should_ take that phone call, respond to that Slack message, or answer that email right now.


## Why Are Interruptions So Disruptive?
What exactly is the problem caused by distractions?
Certainly it pulls us away from some task to work on another one.
Given that humans are bad at multi-tasking, we really can't continue on the first task if we're thinking about the second.
Distractions increase the lead times for accomplishing our original task.
Yet this is the lesser issue.

The frustrating thing about interruptions is that it disrupts your working memory.
Like a house of cards, all our mental scaffolding for the problem can collapse in an instant, causing us to have to start all over.

Research since the 1960's has shown that working memory is limited to a small number of things.
The exact number depends on the person and the type of "chunk" you are working with, but is rarely more than 7.
If you only have seven "registers" to hold state in your mind, then it is no wonder that even small distractions can cause such a problem.
Thinking about something else, even briefly, can clear out that memory to make room for a different context.


## What Can We Do About It?
If interruptions are inevitable (and sometimes even necessary), is there something we can do to retain that precious working memory?
Or at least reduce the impact by speeding up recovery?

In his book, _The Design of Everyday Things_, Don Norman talks how we can compensate for our limited memory by putting information into the world around us.
This could be as simple as writing down notes, or it could be something more complicated like developing new mental models or adding constraints.

Putting information into the world is a powerful way to mitigate the impact of distractions.
Let's look at several software development practices which I've found to be very effective at building programming resiliency.


### Refactor to Named Abstractions
When working with difficult-to-read code, a programmer has to decipher what the code does and why.
If interrupted during this process, you may have to start over from the beginning.
But if you edit the code as you go, assigning better variable names and extracting functions (or even classes) that provide meaning, these new names reduce the difficulty of understanding it after the interruption.

Abstraction is a powerful memory aid.
Instead of having to remember many specific details, we can bundle them up into a single idea or concept.
For example, if I ask you to "go buy some milk" you only need to remember one thing (the milk) despite the many steps that may be involved (how you get to the store, which store you go to, finding the milk, purchasing, and so forth).

We do the same thing all the time in code.
Instead of worrying about the details of how to write bits to disk, we use a file system abstraction with simple methods like `save(filename, data)`.

Using safe refactoring methods (especially if you have tooling to do it for you) is better than just taking notes or adding comments to the code.
You make it easier to understand going forward, and if you're interrupted you can pick up where you left off more easily with fewer, more abstract concepts.


### Test Driven Development
When practicing TDD, the test suite you are writing can be very helpful as a placeholder for what you were doing&mdash;especially if you leave off with a failing test. If something comes up, try to get to the next failing test before pausing to deal with it.

When resuming from an interruption (or picking back up the next day), a well-named, failing test can help you understand what you were trying to accomplish.
The failure message tells you exactly what to do next.
Even if you can't remember all the details, working on getting that test to pass lets you make progress while you rebuild your mental context.


### Collaborative Coding
When pair or mob programming, a distraction need not disrupt the entire team.
One person can handle the interrupting issue, then rejoin the other(s) to get caught up again.
Progress can continue during what would otherwise be disrupted time, or at least there is someone else to remember what you were working on.

Working collaboratively also requires you to vocalize your thoughts which can help everyone remember what you were doing.
Even if the entire group is interrupted, no one person in the group needs to remember the full details.
You can rely on the group's transactive memory to get back on track more quickly than if you were working solo.


### Small Batches
When tackling a large amount of work, there are literally more things to keep in mind; more things to use up your working memory slots.
Slicing work into smaller batches means you focus on a smaller number of details.
It also means you can complete the batch of work more quickly, so there's less opportunity for a disruption.

But if you _are_ interrupted, there is less of a mental modal to reconstruct.
It's easier to have a clear understanding of what you're trying to achieve if it is small.


### Visualization
Using a whiteboard or notepad to draw the details of a problem can help you to get a different perspective on the problem you are tackling.
The visualization can often help you better understand the problem.
If you are interrupted, that imagery can help you pick the problem back up more quickly.


## Develop Resiliency
Prevention is never fool-proof.
When we ship software we know that sometimes bugs will get out, no matter how diligent we are in trying to prevent them.
Measuring mean time to recovery gives us a different way to frame the problem.
Instead of trying to verify that every release is bug-free, we make it simple and fast to release bug fixes by using tools like continuous integration.

Similarly, we will never solve the problem of interruptions by trying to prevent them from ever distracting us.
But we can learn to work in disciplined ways that help us be more resilient so that the distractions aren't so damaging.

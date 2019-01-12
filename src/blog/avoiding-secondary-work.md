# Avoiding Secondary Work

An important lesson I've learned at Pluralsight is that when we let ourselves get too busy we create additional work for ourselves.
This additional work is a form of non-valuable meta-work which I refer to as _secondary work_.
It gets in the way of doing the work that actually delivers value.

Why do we let ourselves get so busy?
Because we believe that if we are not busy then we must be wasting time and money.
Software developers are an expensive lot, so they should be kept busy to get a good ROI on their salaries, right?
Focusing on keeping people busy is known as _resource efficiency_.
This type of thinking is ingrained into western industrial culture.

Let's look at two examples where software development teams tend to generate secondary work for themselves.


## Backlogs

How many things are you tracking in your work backlog?
Having a list of next things to do can be important; when you finish one thing you can smoothly transition to the next.
But if you have too many things in your backlog it will inevitably generate a new type work that does not generate value: managing the list.

It doesn't take very many items in a backlog to generate a lot of meta-work.
It is not uncommon to find teams in _backlog grooming_ meetings where they are prioritizing the list,
trying to remember what old items were all about, making updates, breaking out tasks, estimating work, and so on.
Sadly, much of this work ends up being pure waste because we never end up writing the code to deliver those features.

<div class="blog-image">
![image of a big backlog](../img/big-backlog.png)
<br/>
_How much secondary work will this backlog generate?_
</div>

We should reduce this waste and recover time to do _real_ work &mdash; the work that actually adds value.
Some teams try to mitigate the effect of a long backlog by timeboxing work on it or only focusing on the most important items.
But these measures only address the symptoms of the problem rather than the real cause: the backlog is just too big.

The solution is to limit your backlog inventory.
Small lists are easy to manage and don't waste much time.
So pick a small number of items to keep and **delete** the rest.
As you finish work you'll free up space on the backlog to add new items.
If something more important comes up then it will displace other work and the lowest priority item gets deleted.

Don't worry that you'll forget items on the list.
That's actually the goal!
If something is important enough, it will resurface again and again until you do it.
If it is not important, then why worry about it?


## Too Much Work In Progress

So, you just finished writing some code but your teammate can't do the code review because they are busy with something else.
Or maybe you are stuck on a problem and need some help, but the person you need is in a meeting.
What do you do?

Most developers will start working on the next available task.
It _feels_ like the right thing to do, especially since you don't want your manager to see you sitting idle.
But now you are busy, which hurts your availability when someone needs _you_ to do something for them or when your teammate returns to help you.

Left unchecked, this mentality leads to building up queues of work between members of your team.
As the amount of work in flight grows, teams start generating secondary work to keep track of everything.
Communication becomes more difficult, so more work is added for tracking and reporting status.
Processes are created to manage code branching, merging, and reviews.
CI tooling may be extended to run on multiple branches.

All this secondary work compounds the original problem of being busy.
Plus you are slowed down by additional context switching.
Your rate of delivering value slows.

<a name="reference_1"></a>
To avoid this problem, you need to put a cap on how much work can be in progress at any given time.
These are called work-in-progress (WIP) limits<sup>[1](#footnote_1)</sup>.
When a developer finishes a task and cannot start on a new one, they are forced to wait.
Then they are available when someone needs help or a code review.
Work gets done faster as you focus on finishing work instead of starting new work.

<div class="blog-image">
![image of a backlog with WIP limits](../img/backlog-with-wip-limits.png)
<br/>
_WIP limits prevent the accumulation of secondary work._
</div>

Although taking a short break can be very beneficial,
this doesn't necessarily mean that developers should sit idle while they wait.
It just means they shouldn't start more team-level work.
They could sit down and pair with another developer so that work gets done sooner.
Or learn something new.
Or they might work on some low-priority thing that they can drop at a moment's notice.


## Lean

Resource efficiency is all about staying busy.
When we make this a priority, we will always begin to encounter secondary work.
So is there something else we should focus on instead?

There is. We can focus on delivering value quickly by finishing work instead of starting it.
When we focus on this instead of being busy, we discover that slowing down can make us fast.

<a name="reference_2"></a>
Focusing on getting work done is called _flow efficiency_.
The study of _Lean_<sup>[2](#footnote_2)</sup> teaches us about the relationship between flow and resource efficiency.
Both are important, but Lean explains how focusing on flow helps us get more work done faster, even if it means we aren't keeping people busy all the time!

This is one of the reasons that pair and mob programming practices are so effective.
We know that typing a lot of code as fast as we can is not the way to get quality code (in fact, that's how you make a huge mess), so we should stop acting as if putting our hands on the keyboard indicates that we are working hard!
And how often have you spent a long time coding only to get your best ideas after you left work?
Having slack time encourages innovation and reduces burnout.

Measuring software development productivity is problematic at best.
Comparing teams is futile.
But anecdotally, I've seen first hand how effective the Lean philosophy can be.
At a prior job, I worked on a team that regularly spent 5 to 8 hours a week just managing our backlog and coordinating work
&mdash; nearly a whole day worth of secondary work!
Then when I joined Pluralsight, my team applied these concepts and only spent 1 to 2 hours a week on the same things.

So choose to be less busy!
Avoid or eliminate secondary work.

---

<div class="footnotes">
<ol>
    <a name="footnote_1"></a>
    <li>
        WIP can also be called work-in-process.
        Most of the time, the two terms "process" and "progress" can be used interchangeably,
        but in a few cases (especially relating to finance) there can be important differences. [↩](#reference_1)
    </li>
    <a name="footnote_2"></a>
    <li>
        If you want to learn more about Lean, I highly recommend the book [_This is Lean_](https://thisislean.com/) by Niklas Modig &amp; Pär Åhlström.
        Rather than trying to map Lean practices from other industries over to software development,
        it focuses on core principles which are broadly applicable. [↩](#reference_2)
    </li>
</ol>
</div>

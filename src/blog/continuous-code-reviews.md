# Continuous Code Reviews

_[Originally posted on the [Pluralsight Tech Blog](https://www.pluralsight.com/tech-blog/continuous-code-reviews)]_

Code reviews are generally accepted as good thing in software development.
Some of the benefits include improving quality, sharing knowledge of a system,
and promoting collective code ownership.

But how you perform a code review matters. Herding multiple people into a single
room where code is projected on a screen can be a boring (and expensive)
process. Tools for managing code reviews have improved things dramatically. We
can now review code asynchronously. Static code analysis tools can weed out
mundane issues or company style violations. We can track progress on reviews and
even combine them with our workflow (like with pull requests).

But can we do better?

## Jump on the Continuous Bandwagon
These days we hear a lot about doing things continuously. Continuous
integration. Continuous deployments. Even continuous retrospectives. But why do
them "continuously?" In some cases it's to minimize pain (like with CI). In
other cases, it's to incorporate more good things into our routines.

So is it possible to do a continuous code review? Yes! You simply have someone
reviewing your code while you work on it. Reviewing code is definitely work, and
there is a name for when we have two developers working on the same code at the
same time: pair programming.

"Hang on," I imagine you saying, "you've tricked me into reading an article
about pairing when I thought I was reading about code reviews!"

It's true. Pair programming (and its sister, mob programming) are definitely
topics that I highly advocate. But in this article, I want to focus on how
pairing can be an improved form of code review.

So what benefits do you get from a "continuous code review?"

### Short Feedback Cycles
One of the biggest problems with a typical code review is the delay between
writing the code and getting feedback. By the time you learn what changes have
been recommended, you've already moved on to something else. (A coder's time is
valuable after all; you probably can't afford to sit around doing nothing while
you wait for Lisa to get out of that meeting and do the review.) So then you
have to stop the other thing you were doing and get back to the problem you
thought you had already solved &mdash; you did get the code working before you
submitted the code review, didn't you?

Context switching incurs a lot of overhead. And you may need to do it more than
once if there are multiple reviewers or if your changes require a resubmission.
And this churn doesn't only affect the author; it also affects the reviewers who
are context switching from their other work.

In a continuous code review you don't have this problem. Your pair is right
there giving you feedback as you go. From little things like variable naming to
bigger things like noticing a bug or telling you about an existing class you
should use. The code is updated in realtime.

### Shared Understanding
When you are working with a pair, that other person is helping you with the task
as you go. They understand the decisions being made while you code and can give
better advice. And they know that code much better if they have to come back to
it later. They can even finish up something when you are unavailable.

Contrast that to a usual code review wherein the reviewer has to first
understand the goal of the change, and then read the code to determine whether
it is correct. How many times is the code under review just given a cursory
glance? How often does the reviewer actually execute that code? Does the
reviewer understand this part of the codebase very well?

It takes a lot of effort for an after-the-fact reviewer to give the same quality
of feedback as someone you are actively working with. And all too often, those
code reviews are done in a hurry or with little care.

### Avoid Painful Reviews
Sometimes reviews hurt. At their worst, the reviewers chastise or demean the
author. I'm ashamed to say that I've written some reviews like this in my sordid
past. And even when the reviewers are behaving themselves, it can still be
daunting to receive feedback that suggests massive overhauls or a vast quantity
of little changes.

But when the review is continuous it rarely hurts. People are less likely to say
something mean when you're working together because it's "us" instead of "them."
The process is inherently less adversarial. All those little changes are
discussed and fixed immediately. Pitfalls are avoided and improvements can be
addressed before wasting a lot of time.

### Reduced Need for Tooling
When someone is always reviewing your code, you begin to develop a shared
coding style. This reduces the need for your team to define guidelines. Or, if
you've got a company-wide style guide, the reviewer can help remind you to
follow it because doing so helps them read what you are writing.

This can reduce (or in some cases eliminate) your need for static code analysis
tools. That means you don't need to sit down in a big meeting to discuss the
configuration. And since your review is happening continually, there isn't a
need for specific code review tools either!

## Try It Out
If these benefits sound good to you, why not give continuous code reviews a try?
There are also a number of other great benefits to pair or mob programming.

Of course, there are always some caveats. Some coworkers are just grumpy and
disagreeable. Other people just have clashing personalities. You might not want
to work with them all day every day.

It can often be easier to pair when you are co-located, but remote pairing is
getting easier for distributed teams. If that doesn't work for your team, then
maybe asynchronous tools like pull requests can be better.

Some people might say that pairing isn't a code review. It's hard to remain an
objective reviewer when you're not driving the code, so you become more of
co-authors. At that point, are you too close to the work that you cannot see
your errors (the same reason that people need copy editors)?

These concerns are very real and can mean that continuous code reviews may not
work for some teams. In my experience, the benefits of pairing far outweigh the
drawbacks. It has become my preferred way to work and it's how most of our teams
work here at Pluralsight.
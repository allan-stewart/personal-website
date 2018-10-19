# Tightening Feedback Loops

_Originally published on Oct 12, 2018 on the [Pluralsight Tech Blog](https://www.pluralsight.com/tech-blog/tightening-feedback-loops)_

Feedback is the information we get back from the world in response to doing something.
Without feedback, there is no way to know whether we are accomplishing our goals.

In software development, there are many opportunities to use feedback to improve. Perhaps the most obvious one is getting feedback from our users, but there are many others that come before we can get our software in front of customers.

<div class="blog-image">
![feedback loops](../img/feedback_loops.png)
</div>

Our designs get feedback from the limitations we encounter when writing the code.
We get feedback on merging our code when there are conflicts (or the lack thereof).
Test results give us feedback, as do code reviews.
Then when we deploy to production, we get feedback in the form of customer usage and bug reports.

Each of these feedback loops teaches us something that we can use to adapt and improve.


## Faster Feedback

Unfortunately, there is always delay between doing something and getting feedback.
The longer the lag, the slower we can react.
But worse, long delays also mean that we spend more time on bad assumptions.
Here are some examples:

* a lot of design work goes into an idea which is technically infeasible
* changes are made on a code branch only to find that the master branch changed significantly, rendering that work obsolete
* a developer does something they didn't know they shouldn't, then has to rewrite code after the problem is found in code review
* a bug was shipped to production which isn't found for months, but then it turns out that some customers rely on the unintended behavior
* the new feature we created doesn't actually get used by customers

To avoid these problems we must to tighten our feedback loops to be as fast as possible.

Some feedback loops can be tightened through technical means.
We can use newer computers to compile code more quickly.
We can make our unit tests faster.
We can set up continuous integration servers to automatically run our tests.
These are important, but only get us so far.
Most of the delay in software development projects is due to the way humans choose to work.


## Changing Processes and Practices

It can be very challenging to alter how a team works.
The more people impacted, the harder it is to affect change.
But these changes can also have massive benefits.
Let's look at some ways we can tighten feedback loops by changing how we work.

### Cross-functional Teams
When teams are divided up by specialty, work on any given project must compete with other priorities as it crosses teams.
This delays feedback.
For example, if a developer finished coding up a feature, they may have to wait for a tester to be available to verify it.
And then there is another wait for the operations team to deploy to production.
These delays are made worse by the churn of context switching &mdash; it is rare that every team is already on top of the details of every project.

Cross-functional teams do not have to deal with the communication and prioritization overhead of working across multiple teams.
Feedback comes more quickly because the team members work regularly with each other.
There is less churn and the people whose feedback you need are involved a lot earlier in the process.

This is one reason why we see Agile and DevOps cultural shifts toward having people of different disciplines work together.
(In fact, improving feedback is [the Second Way](https://itrevolution.com/the-three-ways-principles-underpinning-devops/) of DevOps.)

### Test-Driven Development
Have you ever worked on code for a while without executing it, and then when you do finally run it you are surprised if it works the first time?

I used to work that way.
I only ran my code when I ran the whole application, and doing that was slow.
So I'd write a lot of code, then deal with the syntax errors, bugs, and other problems later.

One of the big benefits of test-driven development (TDD) is that you run your code often.
Rather than running the whole application, you're running smaller chunks in test suites designed to be fast.
The constant running of the tests provides feedback on the state of your code.
Not only do you learn whether it compiles and runs correctly, but you also know how long it has been since it was last working!
When an unexpected failure occurs, you can narrow the problem down to your latest changes.

For me, this fast feedback and the design benefits of TDD are the real reasons for the practice.
Having a full test suite with high code coverage is just a nice side effect.

### Continuous Integration
[Continuous integration](https://martinfowler.com/articles/continuousIntegration.html) (CI) is all about the feedback you get when you merge code from different developers to see how it all works together.
It is done all the time (continuously!) because putting it off makes the feedback loop long and the merges become much more painful.

Although you can practice CI without a server (by practicing [trunk-based development](https://trunkbaseddevelopment.com/) for example), there is a lot of benefit to setting up a CI server to automate the work of building and testing the integrated codebase.
This makes the feedback faster and more reliable.

### Pair & Mob Programming
Collaborative coding is a powerful way to tighten feedback loops.
By having people work together, the feedback they give each other is immediate and easily applied.
Pair programming can significantly improve [code reviews](https://www.pluralsight.com/tech-blog/continuous-code-reviews),
and [mob programming](https://www.pluralsight.com/tech-blog/mob-programming) can eliminate that step completely!

Having less work in progress means that merge conflicts are less frequent and less painful.
I worked on a mob programming team where merge conflicts only came up a couple times a year (and even then was usually a special case).

But perhaps most important is knowing that you are working on the right thing.
When you work alone, you might misunderstand the task.
Working together usually pushes misunderstandings or disagreements into the open where they can be addressed.

### Deployment Pipelines
Automating deployments makes them fast and less error-prone.
Then you can get your code and features into testing and production environments where you can get different types of feedback.
Push-button deployments are fantastic.
Some teams go as far as to do continuous deployments.

Decoupling your deployments from your releases means that you can deploy more often, and in turn get feedback more often.
Feature toggles are a great way to try things in production on a small group of users, then roll it out to more users gradually based on the results.

### Small Batch Sizes
My last suggestion for tightening feedback loops is to work in small increments.
Make your tasks or user stories small; ideally in vertical slices where each story delivers some value.
(Avoid horizontal slices like "create the database schema" because those don't deliver value by themselves.)
Then get those small slices into production.

The more time your team spends working on an idea without shipping to production, the longer your feedback cycle becomes.
Without customer feedback, you're just guessing whether they want the new features and you are more likely to fall for sunk-cost arguments.
Unfortunately, many teams make their "minimal viable product" too large and won't ship anything until everything is complete.

Customer interviews and other techniques are great for vetting ideas.
But they are also susceptible to problems like selection bias and small sample sizes.
Instead of waiting for a complete feature set to be finished, consider delivering pieces of functionality out to users sooner.
Then use their feedback to guide your work.

Another benefit of small batch sizes is that the work gets done faster.
It's less code to write, so it's easier to merge and code review.
There are fewer tests to write and make pass.
Each step is easier and there is less noise in your feedback.


## Tighten Your Feedback Loops
Think about where you get feedback from.
What changes could you make to get the most valuable feedback more often?
What would it be worth &mdash; both financially and for team morale?

Getting feedback is important.
The faster you get it, the more quickly you can adapt to change.
You also avoid wasting time and effort on things you don't need to be doing.
The most effective ways I've found to speed up feedback are to improve the human parts of the software development process.

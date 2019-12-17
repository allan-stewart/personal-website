# Feedback Distance

Getting feedback is critical for developing software.
We need it at multiple levels, from code reviews to monitoring production systems.
[Feedback speed is important](./tighening-feedback-loops.html), but it can be difficult to measure how long it takes to get feedback due to the high degree of variation inherent in the processes.
For example, UI tests often take significantly longer when they are failing than when they are passing.
So can we measure feedback in some other way?

I started thinking about this recently when I was talking with some friends about Big O notation.
Big O is a useful tool for approximating the time or space requirements of an algorithm.
It doesn't tell us _exactly_ how long it will take to run our code, but we know that an _O(n<sup>3</sup>)_ algorithm will take longer than an _O(log n)_ algorithm.

We could use this same kind of concept to approximate how long it will take to get feedback based on how "far away" it is.


## Defining Distance in Steps

The distance to getting feedback can be measured in the number of logical steps that lie between writing code and receiving the feedback.
Since this is an approximation, the size of each step does not matter very much.
We need only be relatively consistent in how we measure a step.

The shortest distance we could measure is zero.
For example, when we write a bit of code that has a syntax error, an IDE can show us the problem right away (usually with some red squiggles underlining the problem).
The computer is so quick in this case that it takes effectively no time; the feedback is immediate.

Running unit tests could be measured as one step: running the tests.
Or it could be zero steps if the tests are running automatically after each change (and they run quickly enough to be considered immediate).

To get a few more steps in, let's consider getting coworker feedback from a pull request.
After writing the code:
1. Commit and push
2. Create the pull request
3. Coworker reviews the pull request

So then, this example has a feedback distance of three steps.

Let's consider a longer example of getting customer feedback about our product running in production:
1. Commit and push the code
2. Compile and run unit tests via a CI job
3. Deploy to a staging environment
4. Verify the deployment (e.g. UI testing)
5. Deploy to production
6. Collect feedback

The feedback distance here is six steps.
Six may not seem much bigger, but in this method of measurement, each further step often takes longer than the previous ones.

## Making Use of Distance

Now we have a way of measuring distance, and from that we can infer an approximation of how long it will take.
So what can we do with it?
We can use it to figure out where we can speed up our feedback cycles.

When you start considering feedback distance, you may find you want to choose a different way of working.
Since pull requests have a distance of three steps, you might decide to use a spell checker or linter to get to zero distance feedback for those types of issues.
Or you might choose to start pair programming to reduce _all_ of your coding feedback distance down to zero!

Manual processes often have more logical steps than automated ones.
You can use feedback distance as a guide to picking which tasks could be automated in order to reduce the number of steps.

Finally, feedback distance could also be used to recognize when to use an alternate path to get feedback because the usual path is too long.
For example, you might want to use rapid prototyping or painted door test techniques to learn from customers before engaging in the full development cycle.

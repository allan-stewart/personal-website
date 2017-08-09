# Mob Programming

_[Originally posted on the [Pluralsight Tech Blog](https://www.pluralsight.com/tech-blog/mob-programming)]_

When I joined Pluralsight, I knew going in that it was going to be a different kind of company.
They were already practicing things that I'd been learning about and struggling to implement in my prior company, like TDD and continuous delivery.
But I didn't realize just how different my day-to-day work would be until I found that my team was doing something called _mob programming_.

Every day I came to work, sat down near four other developers, and we worked together on a single computer connected to two 80-inch TVs on the wall.
Together we discussed what we were working on, how we should accomplish it, and took turns on the keyboard.

As a brand-new member of the team, I really appreciated that this way of working allowed me to learn as we went.
I wasn't set in a separate cubicle, given a task and expected to figure it out by myself.
My teammates explained what I needed to know, answered questions, and expected me to contribute more as time went on.
But I also quickly learned that there were many more benefits to mob programming than just bringing new hires up to speed.


## What is Mob Programming?
Woody Zuill describes mob programming as a practice where you get "all the brilliant people, working on the same thing, at the same time, in the same space, and at the same computer."
You can think of it as taking pair programming and dialing it up to 11; especially if you can get a cross-functional team involved in the process.

In this blog post, I want to focus on my own experience with mobbing, so I won't spend much time explaining how to mob.
But here is how my team does it now, after a lot of experimentation:

* We have two 55-inch TVs on stands, connected to a single development-spec'd computer
* In front of the TVs is an adjustable standing/sitting desk with at least one mouse and keyboard (sometimes several, depending on individual preferences)
* We run [a mob timer we created](https://github.com/pluralsight/mob-timer) and use that to take 10 minute turns at the keyboard
* The person at the keyboard is the _driver_ and acts as a "smart keyboard"; she should not type whatever she wants, but interprets the direction of the group into code
* The team members who are not on the keyboard discuss what should be done and give direction to the driver at the highest level of abstraction they can handle
* We start mobbing in the morning, take a lunch break from noon to 1pm, and mob all afternoon
* Members of the team are welcome to disengage from the mob to handle emails, meetings, bathroom breaks, etc. Their keyboard turn is skipped if they aren't present when the timer shows their name


## Are You Serious?
When I talk with people about mobbing at conferences or local meetups, people are often surprised or skeptical about the practice.
But when I ask them whether they ever do any kind of pair programming, they often admit that they get together with other people for "hard problems."
The trick is seeing the value in making collaboration your normal state instead of reserving it for "more deserving" problems.

Basically, the concern is that mobbing is not productive.
People ask, "How did you get your manager to buy into it?" as if there were some trick involved because _obviously_ it can't be an efficient use of developer time.
If we have two developers, we should put them on separate tasks to get twice as much done, right?

The problem with that line of thinking is that we tend to imagine that everything will go smoothly.
We forget how much time we spend on things like communication, integration, and testing.
We forget that software development has a strongly creative aspect that is unpredictable.
And we forget that things will take a different amount of time depending on who is working on it.

Mob programming naturally favors the Lean concept of flow efficiency rather than resource efficiency.
So if you value getting things done and delivered to your customers, then yes, mobbing is very productive.
In my own experience, I've observed that my team usually gets more done in a given week than any other team I've worked on.


## Benefits
There are many reasons why we like mob programming.
First of all, getting the _best_ of the team is better than getting the _most_ out of the team (as per [this great animation](http://i.imgur.com/fGlgTyg.gif)).
We focus on getting the most important thing done rather than keeping everyone maximally busy.

Because we discuss our work all day, communication is improved within the team and there is less need for meetings.
Our code quality is improved because we get the best ideas from the whole team, and we [continually review](https://www.pluralsight.com/tech-blog/continuous-code-reviews) our work.
This leads naturally to collective code ownership.

Because everyone is on the same page, we avoid delays caused by team members being unavailable (whether due to meetings, sickness, vacation, or other).
We aren't slowed down by merge conflicts from other members of our same team.
And we generally don't get stuck on a problem because there are lots of eyes and minds working on the problem.
This all leads to more consistency in both speed of delivery and how we write out code.

Mobbing allows us to learn from each other all the time.
New or junior developers are able to come up to speed quickly because there is always someone there to help them.
If there is a need to research or experiment, an individual can disengage from the mob for a while to learn.

The flexibility for someone to step away from the mob also provides slack time to deal with other concerns (like email), or just to take a break.
Social coding can be exhausting, especially when you are new to it and haven't developed the associated skills.
This can especially help more introverted team members.

If you have a team you enjoy being with, mob programming can also be a lot of fun!


## Drawbacks
Mob programming is the way that my team prefers to work.
We believe that it is the best way for our team to get the job done.
But it won't work for everyone in every situation.

Along with the question of mob programming productivity, some people feel that mobbing is overkill for trivial tasks.
I've found that to be partially true.
Sometimes it's easier to just step away from the mob to do a simple one-off task.
But other times it's easier to just have the mob quickly to it together.
After all, it's the trivial or rote tasks that are often prone to human error; the mob helps guard against that.

Mobbing is social coding, and requires some additional skills to be effective at it.
There might be some people whose personalities clash or they just don't respect each other.
Some coders prefer to work solo (perhaps in their cubicle cave with headphones on).
In these cases mobbing may not be viable.

Some people worry that introverts will not like mobbing.
In my experience, that hasn't been a problem, even for some very introverted people.
Working with a team you trust on problems for work is very different from going to a party or other types of social events.
Introverted people usually don't have trouble talking about things they are passionate about.
But your mileage will vary depending on the people on your team.

Another potential issue around collaborative coding is that individuals may not get as much depth of knowledge.
Sometimes the struggle to figure out a problem helps solidify your understanding.
So if another teammate already knows a solution, you may not really learn much about the problem or the solution.
It takes extra energy (and sometimes courage) to speak up when you don't understand.

Co-location makes mobbing a lot easier.
There are some tools that can help with remote mobbing, but it can still be a challenge.
Additionally, because you are working "at the same time" it's harder to shift schedules to account for time zones or employees that want to work at different times of day.

And finally, the size of the team matters.
Two people are just a pair, not a mob.
Three people is okay, but you're often pairing instead of mobbing because somebody has to step away.
My team has found that the sweet spot for team size is about 4-6 developers (plus cross-functional team members as needed).
We've worked with more than that, but people tend to become disengaged; we've found it better to split into two mobs at that point.


## A Natural Way to Work
After doing mob programming for a while, I found that it just felt natural.
At one of my old jobs, for hard problems we would work together in a conference room.
We called it "the war room" and it was so effective that we experimented with doing it more often.
I don't think I'd call it mob programming, but it was approaching it.

I think that if we had more time, fewer preconceived notions, and perhaps a bit of guidance we could have gone for mobbing.
Knowing what I know now, I can see where it would have solved a number of issues my team had.

Mob programming might not be for you, but I encourage you to at least give it a try.
You might be surprised.
# Managing Technical Debt

[Technical debt](https://martinfowler.com/bliki/TechnicalDebt.html) is a widely known metaphor which helps us think about how technical issues hurt our ability to deliver business value via software systems.
But knowing the concept is different from actually _managing_ technical debt.
Unfortunately, many software teams know that they have technical debt, but don't know what do to about it.

Left unchecked, the "interest" on a team's debt can exceed their ability to pay.
The technical issues get in the way of delivering value; development slows while costs rise.
To make matters worse, teams have a tendency to take on far more debt than they realize due to how hard it is to quantify the costs of technical debt.

The most critical aspect of managing technical debt is to regularly address the issues as part of your normal development workflow.
Like a monthly credit card bill or mortgage payment, you can't survive by just paying interest.
You have to reduce the debt by paying off the "principal."


## Dedicate Capacity

There is never time to work on technical debt unless you _make_ the time.
There is always other work to be done.
Despite promises to the contrary, there will never be time dedicated for your team to “make up” for the technical debt you generate&mdash;new business concerns will always arise and your desired "tomorrow" never comes.

There is _always_ other work to be done!

This means you need to establish a cadence for the team to spend time addressing the issues.
Make this part of the team's normal work flow, not something you save until a "hardening" phase down the road.
Putting off the work only makes it worse.

> The deal with engineering goes like this. Product management takes 20% of the capacity right off the top and gives this to engineering to spend as they see fit – they might use it to rewrite, rearchitect or refactor problematic parts of the code base, or to swap out data base systems, improve system performance – whatever they believe is necessary to avoid ever having to come to the team and say “we need to stop and rewrite.” If you’re in really bad shape today, you might need to make this 30% or even more of the resources. I get nervous when I find teams that think they can get away with much less than 20%.
>
> &mdash; Marty Cagan (2007) [_Engineering Wants to Rewrite!_](https://svpg.com/engineering-wants-to-rewrite/)

Those percentages are critical.
Note that 20% is the **minimum**.
As with [the Red Queen's race](https://en.wikipedia.org/wiki/Red_Queen%27s_race), you have to pay off a lot of debt just to stay in the same place because new feature development will always incur new debt.
If you actually want to make forward progress, you have to pay off more debt than you gain.

This means dedicating sufficient capacity to address technical debt.
Following are some examples of how you might do so.
Choose a strategy that works well in the context of your team.


### 1 Out of Every 4 Work Items

Most teams track their work items in some way, such as user stories or kanban tasks.
In this strategy, you track your technical debt items alongside your other work items and make sure that out of every 4 things you do, one of them is technical debt.
This rate will put you right in the middle of the 20-30% guidance.

For this to work effectively, you need to have similar sizing of your work items.
If your technical debt story only takes an hour, but your other 3 stories take a week, then you aren't hitting that 25% mark.
Ideally, most work items should be small (less than a day's work) to keep a consistent flow.
Larger sizes can also work, but you have to compensate for it&mdash;perhaps using something like story points rather than work items to ensure that you're getting the desired percentage.


### 1 Day a Week

In this strategy, the team sets aside one day every week just for technical debt.
Presuming a 5-day work week, this puts you at that 20% minimum.
Some teams find this a huge morale boost.
They look forward to their chance each week to tackle the problems that have been dogging them.

If you use this strategy, be careful that other concerns (like meetings) don't erode the time for addressing technical debt.
Company holidays, vacations, and other scheduling conflicts can throw off your pace.
Also beware that leaving work unfinished as you switch between feature and technical debt work can make it difficult to integrate changes.


### Rotating Role

Another strategy is to have a rotating role where the assigned developers work exclusively on addressing technical debt.
The number of developers assigned at any given time will depend on the size of your team.
For a team of 4 or 5 engineers, you could always have 1 assigned and achieve the 20-25% of capacity goal.
Larger teams may need more people assigned; smaller ones may only assign the role for a few days per week.

For this to work well, the developers on the assigned role need to follow all the same practices for technical debt work that they would do for product work.
Do you do code reviews?
Technical debt work should be reviewed too.
Do you regularly pair on production code?
You may need to figure out how to apply that practice for technical debt work.
Avoid making your technical debt work different from your normal work so you don't create more problems than you solve.

It's also important for this assignment to change on a regular basis.
No one person should be solely responsible for cleaning up the team's messes&mdash;that's demoralizing.
Developers need to be part of both sides of the coding ramifications of technical debt decisions.


## Refactoring as Part of Feature Work

In addition to reserving capacity for addressing technical debt, teams also need to avoid incurring new debt whenever they can.
Technical debt creates compounding complexity, making it more difficult to address any single issue.
So you'll need to keep your codebase clean as you go.
Refactoring should be a natural part of your coding process (e.g. as part of the [test-driven development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) loop).

When working on new functionality, it is not uncommon to find that changes to the codebase would make it easier to add the new feature.
If the code changes are relatively minor, making them on the spot is usually the best move.
Changing that problematic code makes it easier to add the feature, so you address technical debt _and_ get the work done quickly&mdash;often more quickly than if you had tried to contort yourself around the existing code.

But if the required changes are more extensive, then you'll need to discuss the tradeoff with your team (and perhaps also your stakeholders) to determine whether you should address the technical debt before finishing the feature work.
Remember that it will be more complicated (and therefore more expensive) to pay off that debt if you defer it.
So if you can afford the cost of delay on the feature, you should tackle the technical debt first and spend less overall.

When taking on these debts as part of feature work, I recommend counting the time it takes against the 70-80% capacity devoted to your normal work, not the 20-30% you've dedicated to addressing technical debt.
This is because the work you're doing is directed at enabling the development of that feature.
Without the feature, this issue might not be the most important to address.
Since most teams have more technical debt than they realize, this preserves enough time to address other, higher interest issues.
(Not to mention that the push for new feature development is one of the most common causes of incurring new debt.)


## The Benefits of Managing Technical Debt

In the last ten years I've been able to work on or observe many software projects.
Invariably, the ones that didn't dedicate regular time to paying off technical debt eventually slowed down and were a pain to work on.
Promises to devote time later for paying off technical debt were either broken or too infrequent to matter.
Deadlines were missed.
New projects were spun up to replace the old ones... only to end up with the same problem of overwhelming debt.

In contrast, I've also worked on projects where we did address technical debt on an ongoing basis.
I worked for a few years on one team that used the strategy of working on 1 technical debt card out of every 4 on our kanban board.
On that team we delivered more value more consistently than any other team I had previously been on.
We were enabled to tackle any piece of technical debt that was causing us pain.
And because our cards rarely took more than a day to work on, we were working on technical debt several times a day.

Now, there were also other reasons that team was successful.
We employed Lean methodologies with practices like [small backlogs](https://www.pluralsight.com/tech-blog/avoiding-secondary-work), TDD, clean code, [mob programming](https://www.pluralsight.com/tech-blog/mob-programming), CI, and frequent production deploys.
But when it came to actually sitting down to write code, we were very rarely set back by our technical debt.
New feature development stayed quick, even though we were in the same codebase for years.

Did that mean we never had technical debt?
Not at all.
We had _quite a bit_ of technical debt, just like most teams do.
But we were managing it.


## Summary

Sometimes people wonder why we always seem to have technical debt.
"Why can't we just pay it all off and be debt-free?"
The answer is a terrible truth:

***You can never be free of technical debt.***

In terms of the financial metaphor, you could say that we have "invested" in software.
That investment naturally causes debt in a number of ways, including changes in the world around you that can even plunge you suddenly into deep debt.
Even experienced developers with impeccable practices will generate technical debt.

Although the details of any technical debt is (of course) technical in nature, the _accrual_ of it is really a people problem.
Using appropriate technologies helps.
Writing clean code helps even more.
But you cannot get around the fact that it takes time to address technical issues.

You cannot avoid it.
You can only manage it.
The only way I've found to effectively manage technical debt is to dedicate regular time.

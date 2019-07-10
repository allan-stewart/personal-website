# Making Technical Debt Visible

One of the problems with [technical debt](https://martinfowler.com/bliki/TechnicalDebt.html) is that it is effectively invisible.
Usually only the coders can detect it, and even they can't always see it clearly.
So how can we make it visible for other people, so they understand the impact?
Without that, how we can make effective business decisions?

I've been pondering these questions while reading Dominica DeGrandis' excellent book, [_Making Work Visible_](http://ddegrandis.com/book/).
She recommends that technical debt be added to kanban boards for visibility and to prevent it from becoming neglected.
I very much agree that this should be done, but is it enough?

Putting cards on your board for technical debt adds some great visibility.
It's a great way to help you [manage tech debt](./managing-technical-debt.html) and help people know what initiatives are being worked on.
But it doesn't convey a sense of the overall state of your codebase.
It doesn't answer the questions: "How much technical debt do we have?" or "How bad is it?"

For those who cannot see the technical debt, the effort may feel Sisyphean.
No matter how many technical debt cards parade across the board, the boulder is still waiting to be pushed up the hill every morning.
Although the value of each individual task may be understood, it is impossible to see overall progress or have a sense of when it is prudent to strategically accrue more debt.

One obvious solution is to enumerate _all_ of your technical debt into cards.
But this would definitely create quite a lot of cards in your backlog.
It's hard to deal with having so many and you'd create a lot of
[secondary work](./avoiding-secondary-work.html).
Plus there's another nagging question: is it even _possible_ to enumerate all of your technical debt?
How long until that carefully created list is woefully out of date?


## A Scale for Technical Debt

Since the goal is to communicate an overall sense of the health of our codebase (in regards to technical debt), there is no need to create long lists of all our debt.
Honestly, most non-coders don't even understand much of the list anyway, so it doesn't provide them much value.

Instead, we can focus on providing a general sense of how the technical debt is affecting our ability to deliver.
I suggest that you rate your technical debt on a scale from 1 to 5 where:

* 1 means your technical debt is well-managed and rarely interferes with feature development.
* 5 means your technical debt is debilitating; literally it is hard to get _anything_ done.

Coders (who can detect the debt) should be the ones doing the rating.
They just need to come to consensus on the number.
If there are disagreements, use these to have a discussion about the state of the code until you can agree.
If the group cannot easily come to an agreement, just take the average score and round up.

Communicating your number on this scale is an easy way to give others the information they need without needing to go into a lot of detail.
It takes very little work to determine or share, and can easily be made visible on a poster or some other display.

With that number in place, you can have productive discussions about business decisions.
If the number is low, you may choose to take on some strategic debt in order to deliver an important new feature.
When the number is high, you probably need to dedicate more capacity to paying off technical debt.


## Kitchen Metaphor

In a great article about [software quality](https://martinfowler.com/articles/is-quality-worth-cost.html), Martin Fowler shares a great metaphor which describes why there is always technical debt in a software project:

> A common metaphor is that it's like cleaning up work surfaces and equipment in the kitchen. You can't not make things dirty when you cook, but if you don't clean things quickly, muck dries up, is harder to remove, and all the dirty stuff gets in the way of cooking the next dish.

This metaphor is useful in explaining the technical debt scale: it's a gauge for how messy our kitchen is.
A value of 1 is a relatively (though not completely) clean kitchen.
A value of 5 represents a huge mess where every surface is filthy and the dirty dishes overflow from the sink.
Working in the code is like cooking; it's hard to cook effectively in a messy kitchen.

When trying the technical debt scale for the first time, I used images of clean and dirty kitchens on a poster to communicate the idea.
The metaphor made it easy for everyone to understand the concept.
Our developers quickly came to agreement and drew a large `4` on the poster
(we have our work cut out for us).
Now the poster hangs on our wall near our product planning area to keep it in mind as we plan our upcoming work.


## Conclusion

Left unchecked, technical debt can destroy your ability to deliver business value.
Unfortunately, it is easy to disregard because it is invisible.
So expose that debt.
Make it visible.

Use technical debt cards on your kanban board to make your current and near-term efforts visible.
But for the overall health of your system, consider using a technical debt scale.

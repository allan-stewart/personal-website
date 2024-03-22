# Reconsider Code Collapse

There exists a common code editor feature masquerading as a benefit, but is actually aiding and abetting terrible code.
It stands off to the side of each and every code file, ready to mask a mess.
And all too often, it does its dirty work automatically.

It is the code collapse feature.

Yes, that little chevron sitting by the line numbers, looking innocent.

Sure, it _says_ that it is just there to help, but really it's trying to create places to stash some bad code.
Like those unused `import` or `using` statements you accidentally added.
Or that really long function which really needs to be broken up.
Perhaps that part of the code with the deep nesting with the high cyclomatic complexity,
or else the poor coupling and cohesion of that monstrous class.

Clean code doesn't need to be collapsed.
It has nothing to hide.
It is already short.

So instead of sweeping that dirty code under the rug, get rid of it instead.
If you feel the urge to collapse it, ask yourself why.
There's probably something you can do to make it better such that it no longer wants to be collapsed.

And if your editor is configured to auto-collapse any code, turn that off too.

> _"I think one of his spies would &ndash; well, seem fairer and feel fouler, if you understand."_
> <br/>&mdash; J.R.R. Tolkien
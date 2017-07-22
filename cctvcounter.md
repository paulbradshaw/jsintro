# A counter

This tutorial explains how to create code which 'counts' across a particular range, update text and add images to a webpage at the same time to reflect that count.

## Resources

First, check out [the Codepen that this tutorial is based on](http://codepen.io/paulbradshaw/pen/MyJLQy)

You can also find a [tutorial on Codepen for journalists here](https://docs.google.com/document/d/1EV_VxgCCH_czuaYoretoy_gUaO9pP4BwcSpiRRANbZQ/pub)

## Quick tweaks

You don't need to understand all the code to use it. Here are some simple changes you can make to adapt it for different purposes:

* Change the image URL in line 8: `$('div.cctv').append('<img src="http://www.basildon.gov.uk/media/page_icon/n/i/CCTV.png" />');`
* Change how much the cctv counter goes up in line 10: `cctvcount = cctvcount+1;`
* Change `distance` in line 23 to a specific number so it only counts to that point: `for (i = 0; i < distance; i++){`
* Change the speed at which the images appear by changing `200` in line 27: `setTimeout(addimage, i*200);`
* Change line 8 so that it appends more than one image, or something else: `$('div.cctv').append('<img src="http://www.basildon.gov.uk/media/page_icon/n/i/CCTV.png" />');`

## The code

There are two parts of code here:

* The HTML which displays information to the user
* The JavaScript which 'targets' that HTML and changes it based on factors that you control.

## The HTML

There are three parts to the HTML: a form; a heading; and an empty `div` tag.

The form allows the user to change something about the code. But I'll leave that for now.

The heading displays text which we will change; and the empty div will be filled with images when the code runs.

Here are those two elements:

`<h2>You have now passed <span id='userscore'>0</span> CCTV cameras</h2>`

`<div class="cctv"></div>`

In order to 'target' parts of the HTML with our JavaScript, it helps to use classes and ids. In the code above we have one id (`<span id='userscore'>`), and one class (`<div class="cctv">`).

These will be targeted later in the JavaScript using the *selector* `span#userscore` and `div.cctv`: the hash means `id` and the period means `class`.

## The JavaScript

Now we need code to change that basic HTML. This is jQuery and we are going to use it to do the following:

1. Count from one number to another number (e.g. from 1 to 10)
2. Add an image to represent that number, into our empty div in the HTML
3. Change the text in our HTML heading, to represent that number

As a bonus step we can add the following:
* Allow the user to specify what the number is that we're counting to
* Store that number and use it in our code instead of our own

For now, let's focus on the first steps.

Here's the code.

Because we're using jQuery, we begin with the standard []'document ready' function](https://learn.jquery.com/using-jquery-core/document-ready/), which just makes sure that the code doesn't run until the page is ready.

`$(document).ready(function(){`

  `});`

All the other code now goes between that first line, and the closing `});`

First, then, a simple `console.log` command that we can view in the [Inspector console](https://developer.chrome.com/devtools/docs/console)

`$(document).ready(function(){`

`console.log('jquery running!');`

  `});`

### Storing a count in a variable

Now, if we're going to count anything we need to store that number somehow. That means creating a *variable* to store it, which we do in the next line. We call that variable `cctvcount`

`$(document).ready(function(){`

`console.log('jquery running!');`

`var cctvcount = 0;`

  `});`

That number starts at zero, but we want to change that number. And because we want to do that more than once, it's a good idea to create a *function* for that. Creating a function means we don't have to write the same code ('add one to this number') over and over again; we just write it once and *run* that function over and over again.

### Creating a recipe to use more than once

A function is created with `function` followed by the name you want to give to it, any ingredients in parentheses, and finally, in curly brackets, what the function actually does.

Here are some lines that create a function: this one is called `addimage` and it has no ingredients (the parentheses are empty) and no actions (the curly brackets are also empty)

`function addimage(){`

  `}`

Let's start adding some actions inside those curly brackets:

`function addimage(){`

`cctvcount = cctvcount+1;`

  `}`

Here we change the variable `cctvcount` to be `cctvcount` plus one. That's nice, but it would be useful to display that new count somehow:

`function addimage(){`

`cctvcount = cctvcount+1;`

`console.log(cctvcount);`

`$('span#userscore').text(cctvcount);`

  `}`

We can display it to ourselves in the console using `console.log`. But we can also change the HTML on the page to show it.

The code `$('span#userscore')` *selects* `<span id="userscore">` and turns it into a jQuery 'object' by using the `$` method (this just means 'jQuery').

Now it is a jQuery object we can use jQuery commands - in this case `.text`.

The [.text method](https://api.jquery.com/text/) allows you to change the text inside a HTML element (in this case, that `<span id="userscore">`)

What you want to change that text to is placed inside parentheses like so: `.text(cctvcount)`

`cctvcount` is a variable, so it grab the value of that variable and put that where we've specified.

The `.text` method is useful for *replacing* text, but what if we want to *add* text, HTML or images? In that case we can use `.append`. As with any of these, it helps to search for tutorials or documentation that explains it and gives example, [like this](http://www.w3schools.com/jquery/html_append.asp).

This time we want to target our empty `<div>` like so:

  `$('div.cctv')`

And use `.append` to add some HTML that inserts an image like so:

`$('div.cctv').append('<img src="http://www.basildon.gov.uk/media/page_icon/n/i/CCTV.png" />');`

With this added, then, the full function now looks like this:

`function addimage(){`

`cctvcount = cctvcount+1;`

`console.log(cctvcount);`

`$('span#userscore').text(cctvcount);`

`$('div.cctv').append('<img src="http://www.basildon.gov.uk/media/page_icon/n/i/CCTV.png" />');`

  `}`

When this function runs it will *change* the text in that `<span>` tag and *append* the HTML in the `<div>` tag. The difference is key: if the function runs more than once (which it will) we will have *more than one* image (the second time it runs the image will be appended to the HTML already containing the first) but not more than one text (the second time it runs the text will replace the HTML generated first time round)

Now this function is ready to run. We need something to trigger it. A trigger might be a certain score being reached, or an interaction on the page. In this case, our trigger is going to be a button being clicked.

But to do that we need to put a button on our page.

## HTML for a form

Here's some basic HTML to create a form. This needs to go in our webpage HTML before the heading:

`<form>`

  `How far are you walking?<br />`

  `<input type="text" name="number" class="grabme"><br />`

  `<input type="submit" value="Submit">`

`</form>`

Now to target that HTML with the rest of our JavaScript (remember this is still within the code after our function has been created)

We can target an `<input>` tag with a `type="submit"` attribute by using `('input:submit')` ([more on that here](https://api.jquery.com/text-selector/))

And we can say 'when this is clicked' by using the `click` method ([read about it here](http://www.w3schools.com/jquery/event_click.asp))

The click method is followed by a function, any ingredients in parentheses, and actions in curly brackets, as before:

`$('input:submit').click(function() {`

  `});`

Once again, this is empty at the moment, but we can fill it with what we want to happen *when* that `<input type="submit">` button is clicked:

`$('input:submit').click(function() {`

  `event.preventDefault();`

  `});`

Now, forms actually present a problem for us if we want to run code on this page: that's because by default forms load or reload the page, putting us back where we started.

To stop that happen we need to *prevent* that default action. `event.preventDefault();` [does just that](https://api.jquery.com/event.preventdefault/).

With that sorted, let's add the code we want to run on clicking. First, we need to grab whatever value has been entered into the form:

`$('input:submit').click(function() {`

  `event.preventDefault();`

  `var distance = $('input:text').val();`

  `});`

This new line makes most sense when read from right to left. The new thing here is `.val` - the [val method](http://www.w3schools.com/jquery/html_val.asp) will fetch you the value in the selected element - in this case `$('input:text')`

With that grabbed, it's then assigned to a new variable called `distance`. This is going to be used as part of the loop that follows.

A **loop** is something that generally runs more than once (although strictly speaking it can run once or not at all). It starts with `for` and looks like this:

  `for (i = 0; i < distance; i++){`

    `}`

Once again, all the action takes place between curly brackets. A `for` loop also has ingredients in parentheses: 3 of them.

* The first - `i = 0` - creates a variable called `i` and sets it to 0 at the *start* of the loop.
* The second - `i < distance` - specifies under what condition this loop should *continue*. Put another way, as long as the variable `i` is less than the variable `distance`, then this loop will continue to run.
* The third part is basically how it gets from that start position to a position where it can stop (where that previous condition is *not* met). `i++` means `i` plus one. In other words, each time this loop runs, the value of i increases by one, or *increments*. (The `++` is what is known as an *increment operator*: other operators include *equals*, *greater than*, *plus* and so on).

This is why we have defined that variable called `distance` before this `for` loop runs: it means we can use it to define a stop point for the loop.

So, if someone types `20` into the form, and clicks submit, the code will grab that '20' and assign it to the variable `distance`. The loop will start with `i` at 0, increment by one each time it runs, but continue only as long as `i` is less than 20.

In other words, in that case it would run 20 times (from `i` being 0 to being 19)

Now all that just explains how the loop works: how it knows when to start and when to stop; and how the `distance` variable is used in that.

But what does it *do* while it loops?

Well, every time it loops, it runs just one line:

`setTimeout(addimage, i*200);`

That line uses `setTimeout` - a function which allows you to set a time delay before a piece of code runs. It has 2 ingredients: the code you want to run; and the delay in miliseconds.

The code that is run *by* `setTimeout`, then, is the function we defined earlier: `addimage` (the one that uses `append` to add an image, increases the counter by one, and `text` to put that counter value in the text in the heading). If this loop runs 20 times then each time `addimage` runs that counter goes up by one, and by the end will be 20.

The time delay is 200 miliseconds times the value of `i`. The first time this loop runs `i` is 0, so the code is delayed by 0 (0*200); the second time `i` is 1 so the code is delayed by 200; the third time `i` is 2 so the delay is 400 (2*200) and so on.

Why do we need different delays? One explanation is to imagine that function running 20 times, but all at once. Using `setTimeout` within a loop allows us to set 20 different delays, so although they all 'start' at the same time, their delays are different. ([read more here](http://stackoverflow.com/questions/24849/is-there-some-way-to-introduce-a-delay-in-javascript))

When placed within the `for` loop it looks like this:

`for (i = 0; i < distance; i++){`

  `setTimeout(addimage, i*200);`

  `}`

## What next?

This code has some flaws. For example, once it has run the first time people can click again and the `cctvcount` variable continues from where it left off before.

Also, at the moment the form asks for distance but the code shows CCTV cameras. We could add a calculation of 'cameras per mile' to convert that distance into cameras.

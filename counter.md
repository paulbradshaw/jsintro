# A counter

This tutorial explains how to create code which 'counts' across a particular range, update text and add images to a webpage at the same time to reflect that count.

## Resources

First, check out [the Codepen that this tutorial is based on](http://codepen.io/paulbradshaw/pen/MyJLQy)

You can also find a [tutorial on Codepen for journalists here](https://docs.google.com/document/d/1EV_VxgCCH_czuaYoretoy_gUaO9pP4BwcSpiRRANbZQ/pub)

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




   //Stores the value of the text field as variable 'distance'
var distance = $('input:text').val();
  // Now we start a loop which runs the same number of times as the number in that variable
  for (i = 0; i <distance; i++){
    //Each time it runs it runs the addimage function detailed above
    /* But it also sets a timeout which is the variable 1 * 1000, so the first time this loop runs the timeout is 1000, the second time 2000 and so on. The effect of this is that the function runs every 1000 miliseconds */
    //see http://stackoverflow.com/questions/24849/is-there-some-way-to-introduce-a-delay-in-javascript
setTimeout(addimage, i*200);
    //NEEDS A FAILSAFE TO RESET AFTER BUTTON IS CLICKED - PERHAPS FADEOUT BUTTON

  }

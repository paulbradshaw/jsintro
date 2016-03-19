# A counter

This tutorial explains how to create code which 'counts' across a particular range, update text and add images to a webpage at the same time to reflect that count.

## Resources

First, check out [the Codepen that this tutorial is based on](http://codepen.io/paulbradshaw/pen/MyJLQy)

You can also find a [tutorial on Codepen for journalists here](https://docs.google.com/document/d/1EV_VxgCCH_czuaYoretoy_gUaO9pP4BwcSpiRRANbZQ/pub)

## The code

There are two parts of code here:

* The HTML which displays information to the user
* The JavaScript which 'targets' that HTML and changes it based on factors that you control.

### The HTML

There are three parts to the HTML: a form; a heading; and an empty `div` tag.

The form allows the user to change something about the code. But I'll leave that for now.

The heading displays text which we will change; and the empty div will be filled with images when the code runs.

Here are those two elements:

`<h2>You have now passed <span id='userscore'>0</span> CCTV cameras</h2>`

`<div class="cctv"></div>`

In order to 'target' parts of the HTML with our JavaScript, it helps to use classes and ids. In the code above we have one id (`<span id='userscore'>`), and one class (`<div class="cctv">`).

These will be targeted later in the JavaScript using the *selector* `span#userscore` and `div.cctv`: the hash means `id` and the period means `class`.

### The JavaScript

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

First, then, a simple `console.log` command that we can view in the Inspector 

`$(document).ready(function(){`
`console.log('jquery running!');`
  `});`



  /* set a variable which will be displayed and change as the code runs later */
  var cctvcount = 0;
  /* Create a function to add an extra CCTV camera image to the div class='cctv' */
function addimage(){
  $('div.cctv').append('<img src="http://www.basildon.gov.uk/media/page_icon/n/i/CCTV.png" />');
  /* This also adds 1 to the cctv variable */
    cctvcount = cctvcount+1;
  /* and shows it in console */
console.log(cctvcount);
  /* Then changes the text in span id=userscore */
    $('span#userscore').text(cctvcount);
}
  // This runs when <input> element is clicked
 $('input:submit').click(function() {
   //This stops the default action of a form (reload page)
   event.preventDefault();
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
  });

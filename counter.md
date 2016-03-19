# A counter

This tutorial explains how to create code which 'counts' across a particular range, update text and add images to a webpage at the same time to reflect that count.

## Resources

First, check out [the Codepen that this tutorial is based on](http://codepen.io/paulbradshaw/pen/MyJLQy)

You can also find a [tutorial on Codepen for journalists here](https://docs.google.com/document/d/1EV_VxgCCH_czuaYoretoy_gUaO9pP4BwcSpiRRANbZQ/pub)

## The code

There are two parts of code here:

* The HTML which displays information to the user
* The JavaScript which 'targets' that HTML and changes it based on factors that you control.

There are three parts to the HTML: a form; a heading; and an empty `div` tag.

The form allows the user to change something about the code. But I'll leave that for now.

The heading displays text which we will change; and the empty div will be filled with images when the code runs.

Here are those two elements:

`<h2>You have now passed <span id='userscore'>0</span> CCTV cameras</h2>`

`<div class="cctv"></div>`

In order to 'target' parts of the HTML with our JavaScript, it helps to use classes and ids. In the code above we have one id (`<span id='userscore'>`), and one class (`<div class="cctv">`).

These will be targeted later in the JavaScript using the *selector* `span#userscore` and `div.cctv`: the hash means `id` and the period means `class`. 







`<form>`
  How far are you walking?<br />
  <input type="text" name="number" class="grabme"><br />
  <input type="submit" value="Submit">
</form>

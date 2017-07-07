# Using jQuery for click-driven interactivity

Although you can use `onclick` for click-driven interactivity in JavaScript, the jQuery equivalent, `click()`, is well worth knowing. It's also a good entry point into learning jQuery as a whole.

**jQuery** is a JavaScript *library* - one of the most widely used libraries in the language. It includes a range of functions and methods for creating all sorts of interactivity, animation and cosmetic enhancement, such as fading or sliding things in and out.

## Importing the jQuery library

The first thing we need to do with a a library is **import** it. The simplest way to do this is to link to a live version online, somewhere early on after your `<body>` tag:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`

The link above is the version of jQuery hosted on [CDNJS](https://cdnjs.com/) - a content delivery network (CDN) for JavaScript. It is one of the fastest ways to load JS libraries.

Alternatively, you could link to a *copy* of the jQuery library hosted in the same place as your webpage. One reason you might want to do this is to test your code offline.

In code editors like Codepen you don't even need to add that line: when you create a new pen, you can go to the settings and under JavaScript use the *Quick-add* drop-down menu to select jQuery from the list of commonly used libraries.

![](codepen_settings.png)

This will also add a link to the CDNJS version. When you export the project, a line of code will be added that imports jQuery.

## Making sure the code works when the document is ready

One line which you will see in most examples of jQuery is `$( document ).ready()`. This detects that the document (the webpage) is ready (all the elements have loaded). The parentheses that follow `ready` should then contain all of the code you write next.

Here is an example of a `$( document ).ready()` with one line of code:

```js
$( document ).ready(
  console.log("the document is ready!")
)
```

In other words, `ready()` is 'listening' to the `document`. When it is loaded, it runs the code in its parentheses.

Often, instead, a function is run. This looks something like this:

```js
$( document ).ready(
  function() { //function does something here
   }
)
```

We're now going to fill in that function with something that listens for a click...

## A click in jQuery

Here is some code that does something when clicked:

```js
$("h1").click(
  function() {
  $(this).slideUp()
})
```

I've spread this over multiple lines to make it easier to break up.

We begin with a dollar sign: `$`. This actually means `jQuery` - you can type that instead if you want, but `$` is much quicker to type. `$` is a *function*, which means it has to be followed by parentheses. Anything in those parentheses after `$` or `jQuery` is *selected* so it can then be manipulated by jQuery code.

`$("h1")`, then, *selects* all elements with a `<h1>` tag.

Next, `.click()` is added to the end of that. This creates an *event handler* that will specify what to do when those selected elements are clicked.

Within the parentheses of `click` are the lines of code to be executed when it is clicked. In this case, a *function* is to be executed. The function has no name - it is an anonymous function - and it does one thing: `$(this).slideUp()`

The dollar sign there is again selecting something: `(this)`, which here basically means whatever is being clicked.

The nice feature of `this` is that although there might be more than one element in a `h1` tag, the function will only affect the one being clicked.

And how will it affect it? By applying `.slideUp()` to that element.

We could write the code a different way, using `("h1")` instead of `(this)`. If we did that, however, the code would affect *all* elements in `h1` tags.

Note also that `"h1"` is in quotation marks - it's a *selector* - whereas `this` is not: it's a special *keyword*, like `var` or `if`, which has a particular meaning.

Now we need some HTML that's going to be affected by this JavaScript:

```html
<h1>Make me disappear</h1>
<h1>Make me disappear too</h1>
```

Now that there are `h1` tags on the page, these will be 'selected' by the jQuery code, and any `click()` event on any of those is ready to be handled.

### Wrapping within document ready

Don't forget that all this needs to be wrapped up in the curly brackets inside `$(document).ready( function() {} )`. This is what it looks like in full, with some extra comments:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready( //open the (document).ready
  function()	{ // open the function
    $("h1").click( //open click()
      function() { //second function opens
      $(this).slideUp()
    } //second function closes
  ) // click() closes
} //close the function
); //close the (document).ready
</script>
<h1>Make me disappear</h1>
<h1>Make me disappear too</h1>
```

### Different effects

So far we've applied `slideUp()` when the element is clicked, but there are lots of other effects we can use instead, or as well. These include:

* `slideDown()`
* `fadeOut()`
* `fadeIn()`
* `hide()`
* `accordion()` - this creates collapsible elements (like an accordion that can be expanded or made smaller)

We can also change the text contained within a tag, just as we did before, with:

* `text()` - the text to be added is passed as an argument like so: `text("hello")`
* `html()` likewise will change the HTML

These two methods can also be used to grab the text or HTML within an element, like so:

`var headingText = $("h1").text();`

And we can change the HTML with other methods:

* `addClass()` - this adds a `class=""` attribute to the targeted element. The name of the class is given in the parentheses like so: `addClass("newclassname")`
* `removeClass()` removes it
* `attr()` can [either get or set an attribute](https://api.jquery.com/attr/)

Of course adding a class or other attribute can be one way of applying a style (if the CSS targets that class) or behaviour (if any JavaScript targets that class)

You can [find more effects in the jQuery documentation](https://api.jquery.com/category/effects/), and [more ways of affecting attributes there too](https://api.jquery.com/category/attributes/)

### Adding extra control

The parentheses after methods like `fadeIn()` and `slideUp()` can be used to specify just how *long* it should take to fade, or slide. Try changing the code to `slideUp(1500)` to see the effect.

You can also **chain** different effects together, like so:

`$(this).slideUp(700).slideDown(100).fadeOut(500).fadeIn(1700)`

In this example the element first slides up, then down, then fades out, then fades in. The same code can be expressed like this to make it easier to read:

```js
$(this).slideUp(700)
  .slideDown(100)
  .fadeOut(500)
  .fadeIn(1700)
```

Chaining does not always work as you might expect. In the code below, for example, you might expect the text to change *after* the element has slid up and then down:

```js
$(this).slideUp(700)
  .slideDown(100)
  .html("<strong>Hello</strong>")
  .fadeOut(500)
  .fadeIn(1700)
```

However, it happens at the same time. To control timing more closely, [look at *timer functions*](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers) like `setTimeut()`

## More

The function does not need to be defined *within* the `click()` method. Another way of writing the same code might look like this:

```js
var slideme = function() {$(this).slideUp()};
$("h1").click(
  slideme
             )
```

Here the function is defined in the first line, before being called within the `click` method. Try this with your own code.

Likewise, it does not need to be triggered by a click. Alternative triggers include:

* `mouseenter()`
* `mouseleave()`
* `mousedown()`
* `hover()`
* `dblclick()`

You can [find out more about events on the jQuery documentation](https://learn.jquery.com/events/event-basics/)

## Tips and warnings

W> ### Using selectors efficiently
W>
W> When using selectors in jQuery, you should be specific where you can. For example the selector `div#navbar` is better than simply `#navbar` - the code will run faster.
W>
W> Likewise, if you are going to select an element more than once, it's a good idea to store it in a variable like so, in order to make the code work more efficiently:
W>
W> `var $mything = $("div#navbar"); $($mything).fadeUp()`
W>
W> Conventionally, variables created to store jQuery objects are given names beginning with `$`, but this is just a convention to indicate the nature of the contents.

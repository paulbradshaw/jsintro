# jQuery for journalists

jQuery is a JavaScript **library**. A library is a collection of **functions, methods** and other functionality that has typically been created to tackle a particular problem with basic JavaScript cannot tackle alone.

(Functions and methods are basically recipes for performing an action like 'hide this element' or 'add up these numbers')

Examples of the problems include libraries for data visualisation, for app creation, for data handling, for scraping, and so on.

Libraries exist in other programming languages as well. The Python and Ruby programming languages use libraries for similar problems; and R has them too - only it calls them 'packages'. 

jQuery is a library of functions which make it easier to manipulate HTML elements and make a page more interactive and 'animated'. 

For example, if you've ever seen longform immersive features like Snow Fall, those fancy fades and moving elements are often created with jQuery functions like `fadeOut()`.

It is also one of the most popular JavaScript libraries around, and so probably the one you are most likely to have to work with. In fact, if you believe the Wikipedia entry ([citations here](https://en.wikipedia.org/wiki/JQuery#cite_note-3)) it is *the* most popular.

But most of all, it makes your life a lot easier than if you tried to do the same things with basic JavaScript alone.

## Getting started: loading the jQuery library

In order to use all of the loveliness that jQuery gives us you first need to **load** the library. There are a few ways you can do this:

* Download the jQuery library yourself from [jquery.com/download](https://jquery.com/download/) and link to that
* Link to the jQuery library somewhere on the web

The second option is much easier, and indeed [the jQuery website itself uses this approach](https://stackoverflow.com/questions/547384/where-do-you-include-the-jquery-library-from-google-jsapi-cdn). 

To do this, create a basic skeleton for your HTML page like so:

`<html>`

`<head>`

`</head>`

`<body>`

`</body>`

`</html>`

Then make sure you are within the `<head>` tags of your HTML, and create a `<script>` tag with the `src=` attribute pointing to the Google API. Close that tag straight away so it looks like this:

`<html>`

`<head>`

`<script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js">`

`</script>`

`</head>`

`<body>`

`</body>`

`</html>`

You don't have to use the version hosted by Google: [Microsoft also has one, and you can use a `https:` version too](http://www.w3schools.com/jquery/jquery_get_started.asp)

However you load it, once that's done you are now ready to add some jQuery.

## Adding some HTML which the jQuery is going to affect

jQuery is all about manipulating the **DOM**. DOM is an acronym for Document Object Model, and is just a fancy way of saying 'the webpage' (although it can also be used to refer to other types of documents, like XML files).

In order to manipulate 'the DOM' we need some HTML tags to manipulate. So, add a simple heading and paragraph tag within your `<body>` tag like so:

`<body>`

`<h2>This is a heading</h2>`

`<p>This is a paragraph.</p>`

`</body>`

## Adding the jQuery to change those HTML tags


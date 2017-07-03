# JavaScript: triggering actions with a click

A good introductory skill with JS (JavaScript) is learning how to trigger an action with a click. This can be used to reveal the answer to a quiz question, or allow users to choose a route through a story.

There are various ways of doing this. One is `onclick`. This is an **event handler**: it will *handle* the *event* of being clicked, normally by doing something specified by an equals operator, such as running a function.

Event handlers are placed inside HTML, rather than inside the JS script.

Here's an example - first the HTML containing that `onclick` event handler:

```html
<p>What is the capital of Japan?</p>

      <form>
         <input type="button" onclick="giveAnswer()" value="Reveal the answer" />
      </form>
```

In this case `onclick="giveAnswer()"`.  That means it looks for a function called `giveAnswer`, and runs it when clicked. The parentheses are used to pass any ingredients that the function might need to work. Even if it doesn't need any ingredients, the parentheses are still used but left empty, as in this case.

Second, then, here is some JS containing that function which has been *called* by `onclick`

```js
function giveAnswer() {
               alert("Tokyo")
}
```

Here the function simply opens an alert window with the text "Tokyo" in it.

Because the function needs to exist *before* it is called, it's best to write it in the code before any HTML. Here is a very [simple example](https://github.com/paulbradshaw/jsintro/blob/master/onclickexample.html):

```html
<script>
function giveAnswer() {
               alert("Tokyo")
}
</script>
<p>What is the capital of Japan?</p>

      <form>
         <input type="button" onclick="giveAnswer()" value="Reveal the answer" />
      </form>
```

Alert buttons are clunky, old-fashioned ways of communicating information more commonly associated with pop-up spammy ads. We don't want this sort of user experience. So instead, a better way of doing the same thing is to change the function so that it puts some text onto the page itself.

To do that we need to *target* part of the HTML. There are a range of methods for doing this. These include:

* `getElementsByTagName`
* `getElementsByClassName`
* `GetElementById`
* `querySelectorAll`

As you might guess by the names, these target elements in a HTML page by their tag, their class, their ID, or by a selector (in the same way as a CSS selector targets elements).

In each case the method is followed by the attribute that it is targeting, in parentheses and as a string, like so:

* `getElementsByTagName('a')`
* `getElementsByClassName('subhead')`
* `GetElementById('navbar')`
* `querySelectorAll('p.story strong')`

All but one of these will return a *list* of matches - because tags, classes and selectors can be used more than once. The exception is `GetElementById`, which only returns *one* match (on the basis that an `id` attribute is only supposed to be used once on each page). This also makes it simpler to use.

Here is the function changed to use `GetElementById` to alter the page.

```js
function giveAnswer() {
               document.getElementById('changeme').textContent = "Tokyo"
}
```

You can see the key point here is `getElementById('changeme')` - this targets the HTML element with the attribute and value `id="changeme"`. We will need to alter the HTML so that something has this `id` in a moment.

First, some more explanation of the code. `getElementById` is attached to `document` with a period to specify that we are looking for that HTML element in *this* document, or HTML page: `document.getElementById('changeme')`

Now to *change* the contents of that element, more code is added: `.textContent = "Tokyo"`. The `.textContent` bit sets the text inside that element to whatever comes after an equals sign.

Again, there are other ways to change the content. One option is `.innerHTML`: this allows you not only to set any text, but also add extra HTML, such as formatting or attributes.

So, taking the line of code as a whole: it looks at the `document`, uses `.getElementById()` to look for any elements with the id `'changeme'`, and sets the `.textContent` of that element to `"Tokyo"`.

Now to add a line of HTML with that `id` attribute:

```html
<p>What is the capital of Japan?</p>
<p id="changeme"></p>
```

The full code now looks like this:

```html
<script>
function giveAnswer() {
               document.getElementById('changeme').textContent = "Tokyo"
}
</script>
<p>What is the capital of Japan?</p>
<p id="changeme"></p>
<form>
   <input type="button" onclick="giveAnswer()" value="Reveal the answer" />
</form>
```

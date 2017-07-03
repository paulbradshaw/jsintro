# JavaScript: triggering actions with a click

A good introductory skill with JS (JavaScript) is learning how to trigger an action with a click. This can be used to reveal the answer to a quiz question, or allow users to choose a route through a story.

There are various ways of doing this. One is `onclick`. This is an **event-handler**: it will *handle* the *event* of being clicked, normally by doing something specified by an equals operator, such as running a function.

Here's an example - first the HTML containing `onclick`:

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

Because the function needs to exist *before* it is called, it's best to write it in the code before any HTML. Here is a very simple example:

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

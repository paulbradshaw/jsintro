## Making a quiz with jQuery

Now to remake our quiz using jQuery's `click()` instead of `onclick` - plus a lot of other jQuery functionality to hide and reveal elements.

First, we need a `$(document).ready()` with a function to run with all our code in:

```js
$(document).ready(
  function(){
  }
)
```

Now let's fill that function with a `console.log()` to tell us that it's running, a variable to hold our score, and another `console.log()` to display that variable with some explanatory text:

```js
$(document).ready(
  function(){
    console.log("function running");
    var userScore = 0;
    console.log("userScore is "+userScore);
  }
)
```

Next, we'll add the same function which tests the `result` variable and increases the `userScore` variable if it's "Correct":

```js
var testAnswer = function(result) {
  if (result == 'Correct'){
    userScore = userScore + 1;     
  };
}
```

Now comes the meat of the code, where we replace the `onclick` functionality from the previous quiz.

### Changing the HTML from buttons to list items

In that version, `onclick` was an *attribute* of the HTML buttons. In other words, it was a piece of HTML which *called* a JavaScript function, rather than JavaScript itself.

Here's the HTML that was written for the form and buttons:

```html
<form>
    <input type="button" onclick="testAnswer('Wrong')" value="15" />
    <input type="button" onclick="testAnswer('Wrong')" value="1" />
    <input type="button" onclick="testAnswer('Correct')" value="6" />
</form>
```

In this version, *all* the functionality will be contained within the JavaScript, so there will be no HTML `onclick=""` attribute.

We are also going to change the HTML so that the answers are in lists, which makes more semantic sense:

```html
<ul>
<li class="button" data-result="Wrong">Salif Keita</li>
<li class="button" data-result="Correct">Youssou N'Dour</li>
<li class="button" data-result="Wrong">Khaled</li>
</ul>
```

In the old HTML the fact that an answer was 'Correct' or 'Wrong' was passed as a variable when calling the function with `onclick`. We still need to store that information somehow, so we've created a `data-result=` attribute for each item (the `result` bit of `data-result` is arbitrary). Later we'll fetch that attribute using jQuery.

A `class` attribute is added to each list item so we can select and style it easily. Here's an example of the CSS that might be used for that:

```css
li.button {
  height:	40px;
  width:	80px;
  border-radius:	7px;
	background-color:	#00CED1;
	text-align:	center;
  color:	#FFFFFF;
  float: left;
  margin: 10px;
}
```

Two things to highlight there: `float:left;` is what makes each list item now run next to each other, left-to-right, rather than going underneath each other. And `margin: 10px;` puts a bit of breathing space between them once they do.

### Targeting the 'buttons' with jQuery

Now back to our JavaScript: we can now add some code which targets this HTML and explains what should happen if one of those buttons (list items) is clicked.

First, we need to target any `<li class="button">` element, and add that `.click()`. Inside the `click()` is a function which will run when clicked:

```js
$("li.button").click(
  function(){
    //What happens when that <li class="button"> is clicked
  }
)
```

And here is what it looks like when we've added some lines of code to that function:

```js
$("li.button").click(
  function(){
    var result = $(this).attr("data-result");
    console.log(result)
    testAnswer(result) // run function created earlier using that
    console.log("userScore is "+userScore);
    $('div#changeme').html("<p><strong>"+result+"</strong>! Your score is "+userScore+"<em>. Six all-female acts have headlined the main stage. They are Adele, Beyonce, Florence and the Machine, Shakespear's Sister, Suzanne Vega and Sinead O'Connor.</em></p>");
  }
)
```

The first line fetches that `data-result` attribute using `attr()` on `$(this)` - whichever `li` is being clicked - and assigns the value of that attribute to a new variable called `result`.

The variable `result` is then printed to the console.

Next, we *pass* `result` as the ingredient to be used with the `testAnswer` function. Remember that this adds 1 to the `userScore` variable if it is "Correct".

That variable `userScore` is then printed to the console with some explanatory text.

Finally, something on the HTML page is changed: `div#changeme` is selected, and some extra HTML inserted using `.html()`. Inside the parentheses is what looks like a long string but is actually three strings and two variables inserted in between:

`"<p><strong>"+result+"</strong>! Your score is "+userScore+"<em>. Six all-female acts have headlined the main stage. They are Adele, Beyonce, Florence and the Machine, Shakespear's Sister, Suzanne Vega and Sinead O'Connor.</em></p>"`

Here's the same code formatted differently so you can separate the three strings and see the variables. Remember that JavaScript ignores white space so it will work like this too:

```js
"<p><strong>"
+result+
"</strong>! Your score is "
+userScore+
"<em>. Six all-female acts have headlined the main stage. They are Adele, Beyonce, Florence and the Machine, Shakespear's Sister, Suzanne Vega and Sinead O'Connor.</em></p>"
```

The variables are inserted using the `+` operator after each string. Note that you need that `+` operator before and after the variable.

The first variable is `result` - this will be either "Correct" or "Wrong" and you'll remember that it actually comes from the `data-result` attribute value of the button clicked. It's already been used to update the score, but it has another use here as a string that tells them whether they got the answer right or not.

The second variable is that numeric variable - `userScore` - added at the end of "Your score is " - note the space in that string otherwise the user would see "Your score is0".

Now all of this is inserted into a div with the `id` attribute `"changeme"`. At the moment that selected tag doesn't exist, so we need to add an empty `<div>` in our HTML near the top (after the heading) for this:

`<div id="changeme"></div>`

Now we have everything we need to dynamically display new text after someone clicks on an answer to the question. But what about the question itself?

### Removing the question

Once someone has answered the question the `click()` functionality remains. So they could in theory keep clicking other answers and getting different results. What's more, the score will keep updating. So if they click the right answer twice, their score will become 2.

There are a number of ways we could prevent this:

1. We could remove the *question and buttons*
2. We could disable the *function* that the buttons are calling
3. We could disable the buttons' *ability to call* that function.

Because we'll need the function for other questions, it doesn't make sense to disable that here. And we don't want people clicking buttons that don't work, so the third option isn't ideal either (unless we also changed the appearance of the buttons to indicate the removal of that functionality). The best option, then, is simply to make the question and buttons disappear once an answer has been given.

Still within the parentheses of our `$("li.button").click()` method, then, we can add the following code:

```js
$(this).fadeOut();
```

The `fadeOut()` method tells the function to fade something out. In this case, whatever was clicked (`this`).

Because the thing being clicked was an answer in an `<li>` tag, the result will be that *just that element* (the one answer, which looks like a button) will be faded out.

If we wanted more to be faded out, we'd have to go one level up, to the list as a whole, or the `<ul>` tag. This is the *parent* tag, and can be targeted with the `.parent()` method like so:

```js
$(this).parent().fadeOut();
```

Now all the answers are faded out, but it still leaves the question hanging there. And the question is not in a parent tag, it is in a `<h3>` tag.

The simplest solution is to create a tag in the HTML that contains the whole question: `<div class="question">`. Then, after the question: close that with `</div>`.

This then becomes the *parent* of the `<ul>` list of answers, and we can add a second `parent()` method to target it:

```js
$(this).parent().parent().fadeOut();
```

So now this is selecting the *parent* element of the *parent* element of `this` (the list item, or `<li>`, being clicked)

An alternative approach would be to use `parents()` and specify the tag of the parent being targeted:

```js
$(this).parents("div").fadeOut();
```

Targeting parent elements in this way is called **traversing**. As well as parents, you can also target *child* elements using `children()` and *sibling* elements using `siblings()`.

We could use those techniques target the `<h3>` of the question title. But to do that we would need to use `parent()` to target the `<ul>` tag, and then `siblings()` to target its sibling `<h3>`. Creating an overarching question `<div>` is a simpler solution and also allows us to apply styles to questions too.

Here, then, is the full code with those additions:


```js
$(document).ready(
  function(){
    console.log("function running");
    var userScore = 0;
    console.log("userScore is "+userScore);
    // create function to increase score if answer=Correct
    var testAnswer = function(result) {
      if (result == 'Correct'){
        userScore = userScore + 1;     
      };
    }
    // create event handler if button is clicked
        $("li.button").click(
//          console.log("button clicked");
          function(){
          var result = $(this).attr("data-result"); //grab the data-result="" attribute and store in result
          console.log(result)
          testAnswer(result) // run function created earlier using that
          console.log("userScore is "+userScore);
          $('div#changeme').html("<p><strong>"
                                 +result+
                                 "</strong>! Your score is "
                                 +userScore+
                                 "<em>. Six all-female acts have headlined the main stage. They are Adele, Beyonce, Florence and the Machine, Shakespear's Sister, Suzanne Vega and Sinead O'Connor.</em></p>");  
            $(this).parents("div").fadeOut(); //or you can just specify the parent with the <div> tag
          }
        )
  }
)
```

### Expanding the quiz to two questions

We can add a second question using similar HTML like so:

```html
<div class="question">
<h3>Question 2:</h3>
<p>Only one African-born artist has headlined the main stage. Who was it?<p>
<ul>
  <li class="button" data-result="Wrong">Salif Keita</li>
  <li class="button" data-result="Correct">Youssou N'Dour</li>
  <li class="button" data-result="Wrong">Khaled</li>
</ul>
</div>
```

Because the same classes and `data-result` attributes are used this should work in the same way: the `$("li.button").click()` code will be triggered when any answer is clicked, the result selected, score changed, and question section faded out.

There is just one thing that will be left to change: the answer. The problematic piece of code is this:

```js
"<p><strong>"
+result+
"</strong>! Your score is "
+userScore+
"<em>. Six all-female acts have headlined the main stage. They are Adele, Beyonce, Florence and the Machine, Shakespear's Sister, Suzanne Vega and Sinead O'Connor.</em></p>"
```

The code currently includes the answer for question 1, with the result and score pulled from variables. We need to treat the *answer* as a third variable - and we need to know which *question* was being answered in order to select the right one. Have a think about how to solve that problem before we move on to solve it.

## Tasks

* 


## Extra tips and warnings

T> ### `data` attributes
T>
T> With HTML5 a new type of attribute was introduced that begins with `data-`. This made it possible to store data about elements where developers might previously have used `class` or `rel` instead as a workaround.
T>
T> A `data-` attribute [must include a letter or word after the dash](https://webdesign.tutsplus.com/tutorials/all-you-need-to-know-about-the-html5-data-attribute--webdesign-9642). Typically, that is a word which describes the type of data being described. For example you might use `data-duration` to indicate the length of an audio or video clip; or `data-type` to indicate that the text inside the tag is a string, number, or boolean value.
T>
T> In our case, we've chosen `data-result` to indicate that this attribute indicates whether the result is correct or not. The `result` part is arbitrary: you can choose any word that makes sense to you: for example `data-right-or-wrong` would be equally valid.
T>
T> You can [read more about the `data-` attribute on MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes), or search for tutorials elsewhere online.

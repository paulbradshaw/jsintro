
## Creating a countdown counter

The main difference between a quantity counter and a countdown timer is that to create a countdown we need to gather extra information: specifically, what time it is *right now*.

We will also need to do some extra calculations to break out the seconds, minutes, hours and days between that time and the end point we are counting down towards.

Let's break down the steps we need to go through as a whole, then:

1. Calculate the current time as a number
2. Calculate the difference between that number, and a number representing an end time: in other words, the time left
3. Calculate how many days, hours, minutes and seconds are in that time left
4. Display those days, hours, minutes and seconds separately on the HTML page
5. Update those values every second

### Step 1 and 2: Calculating the current time as a number - and how long the countdown has to go

Dates are a curious type of information to deal with in programming. We firstly need the computer to understand that our date is not just a string of characters like "March 12 2017" or "12/05/17", but a *number* that can be subtracted from other numbers (to get a time remaining or elapsed) and divided (to calculate the number of time units contained within, such as days).

Not surprisingly, JavaScript has a number of built-in Date functions, which [you can read about here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date). You can also use libraries made specifically to work with dates, such as [Moment.js](https://momentjs.com/). The latter is probably better, but the former is easier, so we'll use it for now and touch on some issues along the way.

The first thing to try when it comes to dates, then, is `new Date()`: this creates a new date *object* which can then be manipulated.

The default (if you leave the parentheses empty) is today's date and time - at least, according to the user's computer. Try it in your Developer Console and you will see it will return your current time (try changing the time in your computer settings and see how it changes the next time you run it).

We can create a new variable containing the current date and time with this line of code:

`var currentTime = new Date()`

But if you try to display that variable using `console.log()` you'll see something like:

`[object Date] {}`

This is because you haven't asked for some specific *property* from the date object. To access properties of a date object you need to use the [date object methods](https://www.w3schools.com/jsref/jsref_obj_date.asp) such as `getDay()`:

```js
var currentDay = currentTime.getDay()
console.log(currentDay)
```

These properties will be stored as numbers: Tuesday, for example, is `2`.

We won't be using those methods for now, however.

The second thing to try is `Date.parse()`. This *parses* (interprets, or converts) a piece of information as a date, assuming that the information matches one of the patterns it is familiar with.

Notably [it is not recommended to use Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse), in part because it has not been consistently supported by different browsers. [This post on The Dygraphs Blog from 2012](http://blog.dygraphs.com/2012/03/javascript-and-dates-what-mess.html) explains some of the issues with trying to work with dates more broadly in JavaScript, including these useful 'rules of thumb':

> * Stick to "YYYY/MM/DD" for your date strings whenever possible. It's universally supported and unambiguous. With this format, all times are local.
> * Avoid using hyphenated dates ("YYYY-MM-DD") unless you know what you're doing. Only newer browsers support them.
> * So long as you specify four digits years, date strings at least have a unique parse across all browsers. Some browsers may return an error, but you won't get inconsistent behavior.
> * Chrome tends to be more accepting than other browsers. If a date format parses in Chrome, you shouldn't assume that it parses anywhere else.
> * If a recent browser can interpret as date string as ISO-8601, it will. With this format, your date/time string is interpreted as UTC.



Both are

### Step 3: Calculating days, hours, minutes and seconds: getting to grips with mathematical operators

Here's the function to calculate the time remaining: it takes one ingredient (`endtime`) and then uses that as the basis for a series of calculations to work out how many days, hours, minutes and seconds it makes up.

```js
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date()); //parse the supplied value as a date, and subtract today's date to get a value for total time left.
  var seconds = Math.floor( (t/1000) % 60 ); //divide total time left by 1000 to get seconds - then divide by 60 to find out number of minutes and give the remainder
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
```



The `%` symbol is the *remainder* operator: it [returns the remainder that's left after a one number is divided by another ](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())

###

A second function is created to display that time information on the page. First we need to create some HTML to hold that. Here we create a `div` to hold the whole thing, and four different `class` attributes for each dimension of time.

```html
<div id="clockdiv">
    Days: <span class="days"></span><br>
    Hours: <span class="hours"></span><br>
    Minutes: <span class="minutes"></span><br>
    Seconds: <span class="seconds"></span>
</div>
```

Now the function to target those attributes and alter the text inside:

```js
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
```

The function takes two ingredients, which it calls `id` and `endtime`. The `id` variable specifies the `id` value to be targeted by `getElementById` in the next line. That is then stored in a new variable, `clock`

Next another new variable is created: `timeinterval`. This stores the results of using `setInterval` on a function. The `setInterval` method, [according to MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval):

> "repeatedly calls a function or executes a code snippet, with a fixed time delay between each call."

So, that function inside the parentheses of `setInterval` will be repeatedly run. How repeatedly? You need to look for the second parameter of `setInterval` to see, just before the parentheses close: `,1000)`. That's every `1000` milliseconds, or 1 second.

Now to the function being run inside `setInterval`. Let's break that out:

```js
function(){
  var t = getTimeRemaining(endtime);
  clock.innerHTML = 'days: ' + t.days + '<br>' +
                    'hours: '+ t.hours + '<br>' +
                    'minutes: ' + t.minutes + '<br>' +
                    'seconds: ' + t.seconds;
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}
```

This is an *anonymous* function: it doesn't have a name. The first thing it does is create a variable, `t`, based on the results of running the `getTimeRemaining` function on the variable `endtime`. This is the function created earlier which calculates the seconds, minutes, hours and days *remaining* based on a length of time.

To access that information we use a period followed by the name of the property, e.g. `.days` to get the `days` property.

So `t.days` means 'go into the `t` object and get the `days` value'.

That value, along with the others, are inserted into the HTML on the page by using `.innerHTML`. And it targets the `clock` variable, which is basically whatever `id` we've decided to target.

But what if the time remaining is negative? A final `if` test addresses that:

```js
if(t.total<=0){
  clearInterval(timeinterval);
}
```

If the `.total` value in `t` is less than or equal to 0, then use `clearInterval` on the `timeinterval` variable. Again, we can [find out more about `clearInterval` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) - it:

> "cancels a timed, repeating action which was previously established by a call to setInterval()."

So it will stop the function repeating.

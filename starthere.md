# JavaScript basics

First, let's outline some basic jargon which will come in useful:

* A **statement** is a line of code that does something
* A statement might contain one or more **expressions**. There are various types of expressions, from a *literal value* expression (simply a number or string, which is also itself called a "**literal value**"); a *variable* expression (the name of variable); an *assignment* expression which assigns a value to a variable; an expression which performs *arithmetic* of some sort with either; and a *call* expression which calls a function.
* An **operator** is a character which has a special meaning. The best known operators are *arithmetic* operators like `+`, `-`, `/` and `*`, and *comparison* operators like `>` (greater than), `<` (less than) and `==` (note two 'equals' operators are used in coding to express 'equal to', and a single equals operator is used as as *assignment* operator to assign a value to a variable - you can also use `===` and other variations for more or less strict comparisons). The `.` (dot, or period) operator is particularly useful in accessing object properties.
* **Coercion** is the process of converting one data type into another: for example, converting a number into a string so that it can be printed, or used with another string (to form a URL for example). If coercion is needed for a statement to work, but it hasn't been explicitly done in the code, *implicit coercion* may happe. For example `console.log()` (see below) uses this (it doesn't ask permission) to coerce numbers to strings for printing. Likewise the numbers 0 and 1 may be coerced into FALSE and TRUE if it allows code to work. The difference between the comparison operators `==` and `===` is that `==` allows for coercion whereas `===` does not, so `myvar = 10; myvar2 = "10"; myvar == myvar2` is `TRUE` whereas `myvar = 10; myvar2 = "10"; myvar === myvar2` is `FALSE`.
* A **variable** typically stores information for your code. If that information is not designed to change, it is called a *constant* and conventionally named in capitals with underscores (e.g. `MY_VAR`). But most variables are designed to change (e.g. scores, usernames etc).
* A **block** is a group of statements, contained within curly brackets. Normally they are grouped because they are part of a function, `while`, `do`, `for` loop, or `if`/`else` statement: a block is then only run if the condition is met (or not met) - called a *conditional* - or a function called into action.

## Types of value

Like other programming languages, JavaScript can do different things with different types of value. These include:

* strings
* numbers
* boolean (`TRUE` or `FALSE`)
* objects (for example, data, but also *arrays* and *functions*)
* null or unidentified types
* symbols

You can find out what type of value a variable holds by using `typeof` like so:

`typeof myvar; // change myvar to the name of your variable`

Note that the `null` value will be described as `object` using this process.


## Using the Console

A simple way to test out JavaScript is to write it directly in [the Developer Console in Firefox or Chrome](http://blog.teamtreehouse.com/mastering-developer-tools-console). A quick way to open this is by right-clicking on a webpage and selecting *Inspect* or *Inspect element*, then switching to the *Console* view tab in the window that appears.

In any JavaScript you can print useful information in the console too by using the `console.log()` function: whatever is in the parentheses (normally the name of a variable) is shown in the console when you view the webpage you have written with that JavaScript.

Strictly speaking, the function is `log()`. The `console` bit specifies that it sends the results of that function to the console.

## Adding comments

Add comments at the end of a line, or on their own line, with `//`

Add comments that run over multiple lines with `/*` at the start and `*/` at the end.

## Declaring (creating) variables

Whereas some other languages (such as R and Python) simply name the variable before assigning a value, JavaScript *declares* a variable the first time by using the statement `var` like so:

`var myname = "Paul";`

You can also use `const` instead of `var` if you are declaring a *constant*: this prevents it being changed later.

`const MAX_SCORE = 100;`

A third way to declare a variable is `let`: this is used within a specific *block*:

`{let myvar = 20;}`

JavaScript also typically ends each expression with a semi-colon.

If the variable is *changed* later it does not need to be declared again, only the first time it is created.

Variable names in JavaScript cannot begin with a number.

## Defining (creating) functions

Functions are created with `function`, followed by the name of the function, parentheses (which name any variables it needs to use), and a *block* with the code that it executes when called. For example:

```js
function DoubleNumber(numtodouble){
  console.log(numtodouble * 2);
  }
```

Function names in JavaScript cannot begin with a number.

This function is now ready to be used. A function is called by its name, with ingredients (**arguments**) passed in parentheses like so:

`doubleNumber(2);`

In the example above, the function just triggers an event. Sometimes, however, you need to store the result of a function. In this case the function needs to `return` a value to whatever called it. For example:

```js
function DoubleNumber(numtodouble){
  console.log(numtodouble * 2);
  return numtodouble * 2;
  }

var storingNumber = DoubleNumber(2);
```

Here the function `DoubleNumber` *returns* the result of something being doubled. This is stored in the variable `storingNumber` which called the function.

### Named and anonymous functions

The functions above are named, but you can also create *anonymous* functions. These typically look like this:

```js
function() {
  // what happens goes here
  }
```

Often these are executed at the same time - an IIFE or [Immediately-Invoked Function Expression](http://www.benalman.com/news/2010/11/immediately-invoked-function-expression/). This is done by wrapping the whole thing in parentheses, and adding parentheses after like so:

```js
(function() {
  // what happens goes here
  })()
```

### Scoped variables

A variable created *within* a function - like `numtodouble` in the function above - only exists within that function. It cannot be accessed outside.

This is called the variable's **scope**. In many languages variables within a function are referred to as *local* variables, in contrast to *global* variables (those that have a "global scope") that are not created within functions and can be accessed by any part of the code.

If you get a `ReferenceError` it's likely because the variable does not exist within the scope.

## For loops

A for loop allows you to repeat an action *for* each item or number in a list. The loop needs the following ingredients:

* The initial value of a variable (the *initialization clause*)
* The condition that needs to be met for it to continue (*conditional clause*)
* What updates each time that it loops (*update clause*) - typically, an increment in the value of the variable
* What it does each time it loops

Here's an example which counts from 1 to 10, loops for each count, and prints the number:

```js
for (var i = 1; i <= 10; i = i+1) {
  console.log(i);
  }
```

Here's another way of presenting the same code:

```js
  for (var i = 1; // set var i at 1
    i <= 10; // continue this loop while i is less than or equal to 10
    i = i+1) // change i to i+1 each time the loop runs
    {
    console.log(i); // send value of i to print in console
    }
```

## If/else tests (and switch)

An `if` test looks like this in JS:

`if (test) { do this; }`

Often an `else` is added too, which runs if the `if` test is not met:

`else { do that; }`

If there are more than two things to test, you can also add `else if`

`else if (test) { do the other; }`

A full example would look like this:

```js
if (a > 5) {
  return "a is greater than 5";
  }
  else if (a < 5){
    return "a is less than 5";
    }
    else {
      return "a is 5";
      }
```

An alternative is `switch`. This takes one argument and then tests it against a series of `case`s like so:

```js
switch(myvar){
  case 10:
  return "it is 10";
  case 20:
  return "it is 20";
  }
```

And a third way to write such a statement is to use the `?` operator - called the *conditional* or *ternary* operator, which is written in the following format:

`var question (your_test_here) ? what to do if it's true  : what to do if it's false`

Here's a working example:

`var question (myvar > 10) ? "myvar is greater than 10" : "myvar is not greater than 10"`


## Dealing with objects (e.g. data)

Objects can contain more complex structures of information than other types of value. One particularly widely used example of a JavaScript object is data in JSON (JavaScript Object Notation) format.

Objects can be created in JavaScript using curly brackets like so:

`var myobject = {name: "Paul", age: 24}`

Or if it is just an **array** - a list - you can create it using square brackets like so:

`var myobjectlist = [24, 22, 45]`

*Functions* are also a type of object.

## Strict mode

The instruction:

`"use strict";`

specifies that either a part or all of the code (depending on whether it is typed at the start or within a function) should be interpreted strictly. This is [*strict mode*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

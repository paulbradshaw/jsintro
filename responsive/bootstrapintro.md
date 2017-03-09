# Intro to responsive web design with Bootstrap

This tutorial is designed to get you started quickly with creating responsive webpages using the Bootstrap framework.

Bootstrap is a collection of CSS and JavaScript files which are designed to make it easy to quickly put together webpages that will work on both mobile devices and desktop monitors ('responsive design').

If you go to the [Bootstrap website](http://getbootstrap.com/) you will find a prominent download link - but you don't need to download it to get started.

In this tutorial you're going to copy and adapt some code to quickly explore the capabilities of Bootstrap and understand how basic responsive design works.

## Step 1: Create the skeleton of a HTML page

A HTML page starts and ends with a `html` tag, and normally has a `head` section (for invisible information *about* the page) and a `body` section (for the page contents). Here is some code that you can copy to create that basic skeleton:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
   </head>

  <body>
   </body>
</html>
```

There are a couple of extra elements here - for example the [DOCTYPE declaration](https://en.wikipedia.org/wiki/Document_type_declaration) and [the `lang=` attribute of the `<html>` tag](https://www.w3schools.com/tags/att_lang.asp). You can click on those links to read more about those if you want to. But I'm going to move on. 

## Step 2: Copy the links to the CSS and JavaScript from Bootstrap

In order for Bootstrap to work your page needs to be able to load the Bootstrap CSS file (to control appearance) and the Bootstrap JavaScript file (to control behaviour). The code for that is given on Bootstrap's [Getting Started page](http://getbootstrap.com/getting-started/). I've pasted it below. Copy this and then paste it between your `<head>` tags:

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

## Step 3: Copy example code for the Jumbotron template

In that [Getting Started page](http://getbootstrap.com/getting-started/) you will also find a [section showing examples](http://getbootstrap.com/getting-started/#examples) built with the framework. One of these is **Jumbotron**. 

[Go to the page with the Jumbotron example](http://getbootstrap.com/examples/jumbotron/)

Right-click on the page and select **View source** to see the code 

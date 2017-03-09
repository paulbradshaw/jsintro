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

If you want to, you can also add a `<title>` tag, or any other tags that you want to include in the `<head>` section. Once you're happy with that, move on to the `<body>` section.

## Step 3: Copy example code for the Jumbotron template

In that [Getting Started page](http://getbootstrap.com/getting-started/) you will also find a [section showing examples](http://getbootstrap.com/getting-started/#examples) built with the framework. One of these is **Jumbotron**. 

We are going to copy the code from that example, and then adapt it.

First, then, [go to the page with the Jumbotron example](http://getbootstrap.com/examples/jumbotron/). Right-click on the page and select **View source** to see the code. 

Start copying from just under the `<body>` tag, and copy everything until the closing `</body>` tag.

Now paste that code between your own `<body>` and `</body>` tags. 

In case there's any doubt, here is that code in full:

```html
<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Sign in</button>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
       </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>

      <hr>

      <footer>
        <p>&copy; 2016 Company, Inc.</p>
      </footer>
       </div> <!-- /container -->
```

### Step 4: Adapt the code

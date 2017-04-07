# Using JavaScript to pull data from the police crime API (or any other API)

*[A version of this tutorial can also be found on Google Drive here](https://docs.google.com/document/d/1Ao_EJbK9Yo-UPlH5JBNohvxVn7ll76ENzkw4QH0W0gk/pub)*

In this tutorial you will adapt some existing code in order to learn some techniques in coding for journalism.

It assumes you already have a basic understanding of JavaScript or programming. There are a number of free resources on this including [this free ebook](http://eloquentjavascript.net/) and a [free ebook on jQuery here](http://jqfundamentals.com/). As these are general purpose books it is useful to read them little by little alongside practical projects like the one below.

[The code is on CodePen](https://codepen.io/paulbradshaw/pen/uxihn), a useful resource for looking at other people’s code and adapting it for similar projects. This is just one of a number of code-sharing sites which you may stumble across when searching for problems you’re trying to solve as a data journalist.

CodePen is also useful for experimenting with your own code, as it saves time creating separate HTML, CSS and JavaScript files. That said, publishing the code means understanding how to do that, so make sure you [read the Introductory guide to CodePen and JavaScript](https://docs.google.com/document/d/1EV_VxgCCH_czuaYoretoy_gUaO9pP4BwcSpiRRANbZQ/pub) if you have any problems turning what’s in Codepen to a live, working webpage.

## The code

You can find the code at [http://codepen.io/paulbradshaw/pen/uxihn](http://codepen.io/paulbradshaw/pen/uxihn) - click **Fork** to copy this to your own CodePen account and adapt it. The code is also shown in full below but don’t worry - we’ll pick it apart below:

```javascript
$(document).ready(function() {
 //Start get - URI and callback function
  $.get("https://api.soundcloud.com/tracks.json?client_id=6c9ad53bd0efd615011ad33581905b79", function(tracks){
    // Define what the function does
    //tracks is made into Jquery object, .each loops through, performs new function
    // Start for each loop
    $(tracks).each(function(index, track){
      //Use console log to show track name
      console.log(track);
      // .soundcloud is class="soundcloud" - target as jquery object
      $('.soundcloud').append($('<tr class="row"><td><a href="'+track.permalink_url+'">'+track.title+'</a></td><td>'+track.playback_count+'</td>'+'<td>'+track.download_count+'</td>'+'<td>'+track.user.username+'</td></tr>'))
    }); //Close function
    }); //Close get
}); //Close document ready
```

This code uses the **[Soundcloud API](https://developers.soundcloud.com/docs/api/guide)** - it was originally created by Nick Moreton. We’re going to adapt it for the Police API, and learn a little JavaScript along the way.

## Dollar sign = jQuery

The dollar sign in JavaScript is a short way of writing ‘jQuery’. To demonstrate this (and remember it), try changing the following:

```
$(document).ready(
```

to this:

```jQuery(document).ready(```

Note that **the Q in jQuery needs to be upper case**, or it won’t work. Finally, change it back:

```$(document).ready(```

This first part of the code is called the *ready event*. This readies the document for a jQuery function. You can find out more about this in [Codecademy’s introduction to jQuery](https://www.codecademy.com/courses/web-beginner-en-bay3D/0/1?curriculum_id=50a3fad8c7a770b5fd0007a1), and in the [official ‘learning centre’ for jQuery here](https://learn.jquery.com/using-jquery-core/document-ready/). jQuery’s ‘About’ section also [explains it here](https://learn.jquery.com/about-jquery/how-jquery-works/).
        
This first part of code says:

* Use jQuery (`$`)
* On the document (in parentheses, meaning it is an ingredient to be played with)
* Use the `.ready` event on that
* To run everything in parentheses when it is ready

You may notice that the opening parenthesis after `.ready` is not closed - it is closed right at the end of the code. Watch out for when parentheses are opened and closed to understand what code is enclosed in which parentheses: everything from the bracket after ‘ready’ to the end is run when the document is ready.

The first thing to run is a function...

## The first function - curly brackets

The word `function` in JavaScript is used to define a *function* - i.e. [code which does something](https://www.w3schools.com/js/js_functions.asp).

If that code needs to be ‘called’ then it is normally given a name too, like so: `function addnumbers` 

But in this code it is not.

If the code needs some ingredients, that is included in parentheses after the function name - but again, this code doesn’t need any so the parentheses are left empty: `function()`

The code to be executed in the function is placed in curly brackets after those parentheses are closed. Here, then, is the start of the code to be run in this function:

`function(){`

The first thing in the code is actually a comment:

`//Start get - URI and callback function`

Then the first working code: the use of ‘get’ to grab a URL from our API:

`$.get("https://api.soundcloud.com/tracks.json?client_id=6c9ad53bd0efd615011ad33581905b79",function(tracks){`

To know what ‘get’ does we can just search for ‘get jquery’ or [search the documentation directly](https://api.jquery.com/jQuery.get/) (we know it’s jQuery because it’s attached to the dollar sign by a period).

`Get` not only grabs a URL, but does something with it, described by the second ingredient in parentheses, after a comma: `,function(tracks){`

This is another new function, with one ingredient (`tracks`), and the code after the curly bracket.

`tracks` is an arbitrary name for the data which the code receives from the URL. Try replacing it with `blob` in both places it’s used, and the code still works. The name doesn’t matter, but we need to call it something so we can do things with it. Essentially we are creating a new variable here.

Thankfully, the comments describe exactly what happens in this code:

```javascript
    // Define what the function does
    //tracks is made into Jquery object, .each loops through, performs new function
    // Start for each loop
    $(tracks).each(function(index, track){
```

Specifically, `$(tracks)` turns `tracks` into a jQuery ‘object’ that we can then use jQuery code on. Now, because our URL contained a list of tracks in JSON, ‘tracks’ is a list, so we need to ‘iterate’ through it.

We do that with `.each` - again, more detail [can be found in the jQuery documentation](https://api.jquery.com/each/). This runs a function on each item, and creates the variables ‘index’ and ‘track’ to do that.

Whereas `tracks` was a list, `track` is the name for an individual *item* from that list (hence the name - although again this can be anything).

The next lines of code - within this new function - do their work with each `track` as it loops.

```javascript
      //Use console log to show track name
      console.log(track);
```

This part uses the console to check the JavaScript as it runs. You won’t see this unless you’re using those methods of checking your code ([more on that here](https://stackoverflow.com/questions/4539253/what-is-console-log)) so you could delete this and it won’t stop the code working.

```javascript
      // .soundcloud is class="soundcloud" - target as jquery object
      $('.soundcloud').append
```

This part refers to part of our HTML for the first time. Specifically, it is going to affect `<table class="soundcloud">` in the HTML (because it has `class` specified) and it is going to use `.append` to add something to that table, detailed in the parenthesis following ([more on append here](https://api.jquery.com/append/)):

```javascript
($('<tr class="row"><td><a href="'+track.permalink_url+'">'+track.title+'</a></td><td>'+track.playback_count+'</td>'+'<td>'+track.download_count+'</td>'+'<td>'+track.user.username+'</td></tr>'))
```

You can see a lot of HTML being appended here - a new table row, a new cell, and then a link.

After that HTML - in the middle of the link comes `+track.permalink_url+` - the plus signs add something new to our string of characters. And what it adds is the ‘permalink_url’ part of the `track` being looped through. This is followed by more HTML for further cells, and other properties of `track` - `playback_count`, `download_count` and `user.username`.

You can [find these in the URL that is the basis of all of this](https://api.soundcloud.com/tracks.json?client_id=6c9ad53bd0efd615011ad33581905b79). For more on JSON [see this guide for journalists](https://onlinejournalismblog.com/2011/04/14/data-for-journalists-json-for-beginners/) which also explains why the username in our data has to be grabbed by going ‘through’ `user`.

Put together, that last bunch of code essentially creates a new row of HTML, with four cells: a linked title, a playback count, download count and username. The row is appended to our previously empty table.

And remember that code runs for every track in `tracks`, so we get a row appended for each `track` until the list is exhausted.

All that is left after that is to close the parentheses on the various functions that have been created, because they’re all nested within each other - first our function in `each`, then our function in `get`, and finally the very first function we created, in `ready`:

```javascript
    }); //Close function
    }); //Close get
}); //Close document ready
```

## Adapting the code for the Police API

You don’t have to entirely understand the code above to adapt it for another API. But it does provide a useful starting point for exploring JavaScript and jQuery.

Here is the same code adapted for the Police API, on CodePen at http://codepen.io/paulbradshaw/pen/pitHe

Below is the adapted code in full:

```javascript
$(document).ready(function() {
 //Start get - URI and callback function
  $.get("http://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01", function(tracks){
    // Define what the function does
    //tracks is made into Jquery object, .each loops through, performs new function
    // Start 'for each' loop. Run function naming variable 'crime' and index as 'index'
    $(tracks).each(function(index, crime){
      //Use console log to show crime name
      console.log(crime);
      // there's a second URL with crime outcome details, e.g.
      // http://data.police.uk/api/outcomes-for-crime/eb643ba6cd4ea4d2630ac1ad6b8b42036faafee3a45767128110765de04d8f3c
      // .crimes is class="crimes" - target as jquery object
      $('.crimes').append($('<tr class="row"><td><a href="http://data.police.uk/api/outcomes-for-crime/'+crime.persistent_id+'">'+crime.category+'</a></td><td>'+crime.location.latitude+","+crime.location.longitude+'</td>'+'<td>'+crime.location.street.name+'</td>'+'<td>'+crime.persistent_id+'</td></tr>'))
    }); //Close function
    }); //Close get
}); //Close document ready
```

Most of this is explained for the previous example, so I’ll just explain the changes:

```javascript
$(document).ready(function() {
 //Start get - URI and callback function
  $.get("http://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01", function(tracks){
```

The first change is the URL being used with `get`. This is a URL from the Police API - it’s actually an example URL [from the documentation](https://data.police.uk/docs/method/crime-street/) for a request for crimes at a particular location and date. We know this works (test it in a browser like Chrome) and can always change it later.

```javascript
    // Define what the function does
    //tracks is made into Jquery object, .each loops through, performs new function
    // Start 'for each' loop. Run function naming variable 'crime' and index as 'index'
    $(tracks).each(function(index, crime){
```

Our second change (aside from the comments) is in naming each item in our list `crime`. Notice, however, that we didn’t change `tracks`. Again, these are arbitrary names for variables the code is creating, so it doesn’t matter what they’re called, apart for the purposes of clarity. So we could have left `track` as it was.

```javascript
      //Use console log to show crime name
      console.log(crime);
      // there's a second URL with crime outcome details, e.g.
      // http://data.police.uk/api/outcomes-for-crime/eb643ba6cd4ea4d2630ac1ad6b8b42036faafee3a45767128110765de04d8f3c
      // .crimes is class="crimes" - target as jquery object
      $('.crimes').append
```

This time our HTML table uses `class="crimes"` so we’ve adapted the code accordingly to `append` code to that.

```javascript
($('<tr class="row"><td><a href="http://data.police.uk/api/outcomes-for-crime/'+crime.persistent_id+'">'+crime.category+'</a></td><td>'+crime.location.latitude+","+crime.location.longitude+'</td>'+'<td>'+crime.location.street.name+'</td>'+'<td>'+crime.persistent_id+'</td></tr>'))
```

The most significant change is in how we identify the data we want from the URL. The JSON at that URL uses ‘category’ and ‘persistent_id’, but it also has latitude and longitude nested a little deeper inside a ‘location’ category, and there’s a street name buried even deeper (‘name’ within ‘street’ within ‘location’).

## Adapting for another API

Knowing this you should be able to use the same code for another API by only changing the following:
Change the URL to a URL on the other API
Change the references inside the append code so that they point to the relevant attributes in that API’s JSON (the attribute is the description of the data, e.g. ‘category’, ‘longitude’)
Change the class targeted if your HTML uses a different class or ID - or more simply, make sure your HTML table has the same class as in the code above
To place that JavaScript in a standard HTML webpage:

With CodePen you can see instantly below if the code works. However, to get that in a live webpage you need to put the code in one or more files.
First, in a simple text editor such as Notepad (not Word), copy the HTML part of the code into a new document. You will need to add opening and closing tags for <html>, <head> and <body> because CodePen doesn’t require these.
Save it in a new folder you can easily find and give it a name with the extension .html
Read the Introductory guide to CodePen and JavaScript on turning what’s in Codepen to a live, working webpage.
In this case, you need to make sure that this HTML file loads jQuery, so somewhere in the <head> area you should have the following:
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js">
</script>
You also need to make sure it loads the JavaScript you’ve adapted, so copy that into a new file using the same simple text editor and saving in the same folder with the extension .js
Then return to your HTML document and link to that new file with a script near the end of your <body> section like so:
<script src="script.js"></script>
The code in full might look something like this in your HTML file:
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js">
</script>
</head>
<body>
<table class="crimes">
  <tr>
    <th>category</th>
    <th>location</th>
    <th>street</th>
    <th>uniqueid</th>
  </tr>
</table>
<script src="script.js"></script>
</body>
</head>
And like this in your script.js file:
$(document).ready(function() {
 //Start get - URI and callback function
  $.get("http://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01", function(tracks){
    // Define what the function does
    //tracks is made into Jquery object, .each loops through, performs new function
    // Start 'for each' loop. Run function naming variable 'crime' and index as 'index'
    $(tracks).each(function(index, crime){
      //Use console log to show crime name
      console.log(crime);
      // there's a second URL with crime outcome details, e.g.
      // http://data.police.uk/api/outcomes-for-crime/eb643ba6cd4ea4d2630ac1ad6b8b42036faafee3a45767128110765de04d8f3c
      // .crimes is class="crimes" - target as jquery object
      $('.crimes').append($('<tr class="row"><td><a href="http://data.police.uk/api/outcomes-for-crime/'+crime.persistent_id+'">'+crime.category+'</a></td><td>'+crime.location.latitude+","+crime.location.longitude+'</td>'+'<td>'+crime.location.street.name+'</td>'+'<td>'+crime.persistent_id+'</td></tr>'))
    }); //Close function
    }); //Close get
}); //Close document ready
If you open the HTML file in your browser (use CTRL+O and locate it) it should work.
If it works on your machine like this you should be ready to upload it to some live webspace.
Ideally you should have some yourself, bought through a hosting provide like GoDaddy or BlueHost, and where you already run a Wordpress-based site. Free webspace providers like Wix often have limitations on JavaScript - not to mention looking much less professional. But you may find one which works for you (if so, let me know!).
You can host the JavaScript on a service like http://yourJavaScript.com/ which may address some problems.

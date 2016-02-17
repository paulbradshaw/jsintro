# JS intro

This repository has some basic files which you can **clone**, add to, and then add back in to the repository using a **pull request**.

They provide a useful introduction to JavaScript, but also to collaborating on a project using GitHub.

## The setup

Before starting, make sure you have the following:

* An account on GitHub
* You have downloaded and installed GitHub on your local machine (laptop, whatever)
* When setting up GitHub on your own machine it will create a folder to store your GitHub *repositories* (sub-folders and files). Make sure you know where that folder is (you will be asked where you want to put it, generally in Documents).
* You might also prefer to download a decent text editor like [TextWrangler](http://www.barebones.com/products/textwrangler/) rather than using your computer's own default text editor.

## Step 1: Clone the repository

Log in to GitHub and go to the repository at [https://github.com/paulbradshaw/jsintro](https://github.com/paulbradshaw/jsintro)

Click on the *clone* button in the upper right corner: it looks like a TV/monitor with a downward arrow. You can find it next to the **Download ZIP** button.

![](https://raw.githubusercontent.com/paulbradshaw/jsintro/master/clone.png)

This should open your GitHub *client* (software) and download that repository (folder). Put in plainer language: it will create a folder with the same name in your own machine's GitHub folder (this was created when you installed GitHub) and a copy of all files in that repository. 

You will be asked where you want to put it, and the default option will be within your GitHub folder. That's fine.

Find the folder on your machine where that new folder was just created. One way is to right-click on the name of the repository in your GitHub *client* and select *View in Finder* (on a Mac) or something similar on a PC.

![](https://raw.githubusercontent.com/paulbradshaw/jsintro/master/openinfinder.png)

This should contain all the files from the repository you just cloned. You can now edit files and add new ones.

## Step 2: Read the code

There is a HTML file in the repository. Here is the main section:

`<p id='showme'>0</p>
<img src="http://www.breederretriever.com/photopost/data/591/Picture_126_640x480.jpg" id="empty" onclick="potato()">
<script>
var score = 0;
function potato() {
score = score+1;
var image = document.getElementById('empty');
document.getElementById('showme').innerHTML = score;
}
</script>`


This has a small amount of HTML, and some JavaScript within `<script>` tags. Open this file on your local machine using a text editor like TextEdit or Notepad. It's useful to download a better text editor like [TextWrangler](http://www.barebones.com/products/textwrangler/).

The HTML creates the page's basic elements: 

* a paragraph with a 0 in it; 
* an image

Add spaces between those 3 lines of HTML if it helps you.

The JavaScript does two main things:

* Create a variable: `var score = 0;`
* Create a function called 'potato': `function potato() { ... }`

Everything else is *inside* that function. Here's what happens:

* Firstly, the function has no parameters (note the empty brackets after `potato`)
* Inside the curly brackets `{ ... }` are the things that happen when this function runs.
* First, the variable `score` is changed to now be what it was, plus 1: `score = score+1;`
* The next line is best read from right-to-left: on the right of the equals signs, it grabs any elements on the page that have an id='empty': `document.getElementById('empty')`
* It then puts these elements into a variable it calls 'image': `var image = document.getElementById('empty');`
* Finally, it grabs any elements with an id="showme", and uses `.innerHTML` to set the HTML inside those elements to the value of the variable 'score': `document.getElementById('showme').innerHTML = score;`
* Don't forget that all these commands inside the function need to be finished with a closing `}`

## Step 3: Make your changes

All this can be better done with jQuery.
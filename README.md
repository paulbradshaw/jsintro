# JS intro

This repository has some basic files which you can **clone**, add to, and then add back in to the repository using a **pull request**.

They provide a useful introduction to JavaScript, but also to collaborating on a project using GitHub.

## The setup

Before starting, make sure you have the following:

* An account on GitHub
* You have downloaded and installed GitHub on your local machine (laptop, whatever)
* When setting up GitHub on your own machine it will create a folder to store your GitHub *repositories* (sub-folders and files). Make sure you know where that folder is (you will be asked where you want to put it, generally in Documents).

## Step 1: Clone the repository

Log in to GitHub and go to the repository at [https://github.com/paulbradshaw/jsintro](https://github.com/paulbradshaw/jsintro)

Click on the *clone* button in the upper right corner: it looks like a TV/monitor with a downward arrow. You can find it next to the **Download ZIP** button.

![](https://raw.githubusercontent.com/paulbradshaw/jsintro/master/clone.png)

This should open your GitHub *client* (software) and download that repository (folder). Put in plainer language: it will create a folder with the same name in your own machine's GitHub folder (this was created when you installed GitHub) and a copy of all files in that repository. 

You will be asked where you want to put it, and the default option will be within your GitHub folder. That's fine.

Find the folder on your machine where that new folder was just created. One way is to right-click on the name of the repository in your GitHub *client* and select *View in Finder* (on a Mac) or something similar on a PC.

![](https://raw.githubusercontent.com/paulbradshaw/jsintro/master/openinfinder.png)

This should contain all the files from the repository you just cloned. You can now edit files and add new ones.

## Step 2: Make your changes

There is a HTML file in the repository. 

`<p id='showme'>0</p>
<button onclick="document.getElementById('changeme').innerHTML = 'Hello'">BUTTON TEXT</button>
<img src="http://www.breederretriever.com/photopost/data/591/Picture_126_640x480.jpg" id="empty" onclick="potato()">
<script>
var score = 0;
function potato() {
score = score+1;
var image = document.getElementById('empty');
//image.src = "http://www.picturesnew.com/media/images/picture-wallpaper.jpg";
document.getElementById('showme').innerHTML = score;
}
</script>`


This has some JavaScript
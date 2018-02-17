console.log("hello");

$(document).ready(function()	{
  var addme = function() { //create new function called addme
    console.log('the score on the button was: ',this.textContent);
    console.log("adding 10...");
    $(this).text(parseInt(this.textContent)+10);
    var buttonwidth = $(this).width();
    console.log('the button width was:', buttonwidth);
    $(this).css('width',buttonwidth+40);
    console.log("adding 16..."); console.log(this.style.backgroundColor);
    if(buttonwidth == 26){
      $(this).css('background-color','#91cf60');
    }
    else if (buttonwidth == 52){
      $(this).css('background-color','#d9ef8b');
    }
    else if (buttonwidth == 78){
      $(this).css('background-color','#fee08b');
    }
    else if (buttonwidth == 104){
      $(this).css('background-color','#fc8d59');
    }
    else if (buttonwidth == 130){
      $(this).css('background-color','#d73027');
    }
  };
$("li button").click(addme) //when a li button element is clicked, it runs the addme function defined earlier

});
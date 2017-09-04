# Mapping: hexmaps, hex tiles, tilemaps

Hexmaps are maps that use hexagonal tiles to represent an administrative area (a country, region, constituency, police authority, etc) instead of using the geographical shape of that area. They address a major issue with normal geographical maps that otherwise can lead to densely populated areas being under-represented in maps.

Start with Oli Hawkins's [post about Making hexmaps with D3 here](http://olihawkins.com/2017/06/1), then go to [his GitHub repo on D3 HexJSON](https://github.com/olihawkins/d3-hexjson). Don't worry about some of the jargon, I'll simplify it here and walk through the process of adapting the code for a working webpage/map.

## Creating a HTML webpage with a hexmap

You will need 3 files for this to work. These are:

* A HexJSON file, ending in `.hexjson`
* A HTML file, ending in `.html`
* A JavaScript file: `d3-hexjson.min.js`

There is more than one way to create or find these files. You will find examples in his repo, for example. But I'm going to suggest this approach:

Firstly, copy the HexJSON code example from the [README.md](https://github.com/olihawkins/d3-hexjson):

```json
{
	"layout":"odd-r",
	"hexes":{
		"Q0R0":{"q":0,"r":0},
		"Q1R0":{"q":1,"r":0},
		"Q2R0":{"q":2,"r":0},
		"Q3R0":{"q":3,"r":0},
		"Q0R1":{"q":0,"r":1},
		"Q1R1":{"q":1,"r":1},
		"Q2R1":{"q":2,"r":1},
		"Q3R1":{"q":3,"r":1},
		"Q0R2":{"q":0,"r":2},
		"Q1R2":{"q":1,"r":2},
		"Q2R2":{"q":2,"r":2},
		"Q3R2":{"q":3,"r":2},
		"Q0R3":{"q":0,"r":3},
		"Q1R3":{"q":1,"r":3},
		"Q2R3":{"q":2,"r":3},
		"Q3R3":{"q":3,"r":3}
	}
}
```

Create a new file using a text editor like Atom. Paste this copied code. Then save the new file with the name `example.hexjson`

You've now got one of the three files you need.

Next, copy the HTML code example from the [README.md](https://github.com/olihawkins/d3-hexjson):

```html
<html>
<head>
<style>
#vis {
	margin: 0;
	padding: 0;
	text-align: center;
	font-family: sans-serif;
	font-size: 10pt;
}
</style>
</head>
<body>
<div id="vis"></div>
<script src="d3.min.js"></script>
<script src="d3-hexjson.min.js"></script>
<script>

d3.json("example.hexjson", function(error, hexjson) {

	// Set the size and margins of the svg
	var margin = {top: 10, right: 10, bottom: 10, left: 10},
		width = 500 - margin.left - margin.right,
		height = 420 - margin.top - margin.bottom;

	// Create the svg element
	var svg = d3
		.select("#vis")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Render the hexes
	var hexes = d3.renderHexJSON(hexjson, width, height);

	// Bind the hexes to g elements of the svg and position them
	var hexmap = svg
		.selectAll("g")
		.data(hexes)
		.enter()
		.append("g")
		.attr("transform", function(hex) {
			return "translate(" + hex.x + "," + hex.y + ")";
		});

	// Draw the polygons around each hex's centre
	hexmap
		.append("polygon")
		.attr("points", function(hex) {return hex.points;})
		.attr("stroke", "white")
		.attr("stroke-width", "2")
		.attr("fill", "#b0e8f0");

	// Add the hex codes as labels
	hexmap
		.append("text")
		.append("tspan")
		.attr("text-anchor", "middle")
		.text(function(hex) {return hex.key;});
});

</script>
</body>
</html>
```

Create a new file using a text editor like Atom. Paste this copied code. Then save the new file with the name `index.html`

I now want to highlight two lines in this code that you will need to fix in order for it to work:

```html
<script src="d3.min.js"></script>
<script src="d3-hexjson.min.js"></script>
```

These two lines both load a JavaScript file, which it assumes is located in the same place as the HTML file. But you don't have these.

The first line loads the D3 JavaScript library. This can instead be loaded from CDNJS. Change the first line, then, to this:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.10.2/d3.min.js"></script>
```

The second line loads the much more specific D3 plugin HexJSON. This is not on CDNJS, so you'll need to download it.

You will find it in the ['build' folder of the HexJSON repo](https://github.com/olihawkins/d3-hexjson/tree/master/build). Click on ['d3-hexjson.min.js'](https://github.com/olihawkins/d3-hexjson/blob/master/build/d3-hexjson.min.js), and then click on the '[Raw](https://raw.githubusercontent.com/olihawkins/d3-hexjson/master/build/d3-hexjson.min.js)' button to see the raw file, and save it to your computer (*File > Save page as*).

Save it in the same place as your HTML file, and the HTML page should now work.

## Using other `hexjson` files

This is just an example, but you're likely to want to use a hexmap for something familiar, like constituencies. You will find a hexjson file with those in the [examples folder](https://github.com/olihawkins/d3-hexjson/tree/master/examples) of the repo. Click on '[constituencies.hexjson](https://github.com/olihawkins/d3-hexjson/blob/master/examples/constituencies.hexjson)', and then click on '[Raw](https://github.com/olihawkins/d3-hexjson/blob/master/examples/constituencies.hexjson)' to get to the raw file, then save that.

Now, in your HTML file you need to change the link so that it is pointing to the new file. Search for any mention of `example.hexjson`:

```html
d3.json("example.hexjson", function(error, hexjson) {
```

If you change 'example' to 'constituencies' it should work - but I get an error. Instead I tried duplicating `example.hexjson` and copying the constituencies JSON into it, which seemed to work fine.

Because there are so many of them, the labels overwhelm the map. The key part to amend to change this is this part of code:

```js
// Add the hex codes as labels
hexmap
  .append("text")
  .append("tspan")
  .attr("text-anchor", "middle")
  .text(function(hex) {return hex.key;});
```

To remove the labels, delete the last line which pulls the `key` value from each constituency in the hexjson. Or you can just comment it out, as I have done below:

```js
// Add the hex codes as labels
hexmap
  .append("text")
  .append("tspan")
  .attr("text-anchor", "middle")
  //.text(function(hex) {return hex.key;});
```

Once you've done that, the other lines become pointless too. You can delete them accordingly.

## Colouring each hex

Without labels this map isn't doing anything, so you need to add colours. The key line that does that is currently:

```js
.attr("fill", "#b0e8f0");
```

You can adapt this to use a function similar to that which added the text:

```js
.attr("fill", (function(hex) {return hex.key;}));
```

Instead of one hexadecimal code, the function is grabbing some attribute from `hex`. At the moment, it's grabbing the `key`, or the name of the constituency. Elsewhere you can see it grabbing other attributes like `hex.x` and `hex.y`.

At the moment the hexjson doesn't have any hexadecimal codes, so you'll need to add some to test. Below I've shown how the first two lines might be changed to add a new attribute `"h"`, with just that:

```json
"E14000530":{"n":"Aldershot","q":-3,"r":-11,"a":"SE","u":"UKJ","p":72430,"h":"#ff0000"},
"E14000531":{"n":"Aldridge-Brownhills","q":-3,"r":-1,"a":"WM","u":"UKG","p":60215,"h":"#00ff00"},
```

There are various ways of populating this - for example you could use `if` tests to fill this with a particular code. But we're just concerned with how you show that data in a map. Here's the code adapted:

```js
.attr("fill", (function(hex) {return hex.h;}));
```

That now fetches the `"h"` attribute, and uses it to specify the fill colour for each hex tile.

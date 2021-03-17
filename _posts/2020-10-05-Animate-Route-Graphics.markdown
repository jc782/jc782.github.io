---
title: Animated Route Graphics
layout: post
date: '2020-10-05 22:10'
headerImage: false
tag:
  - project
star: false
category: post
author: joshcarr
description: Using snap to animate SVGs.
jsarr:
  - /assets/js/snap.svg.js
  - /assets/js/japan.js
published: true
---
<style>
  .container {
  position: sticky;
  position: -webkit-sticky;
  top:0;
  background-color: white;
  z-index:10;
  height: 20vh;
  overflow: hidden;
}
</style>

<div class="container">
<svg id="someID" viewBox="0 450 900 300" overflow="hidden"></svg>
</div>

<div markdown="1" class="contentCont" id="scroll">

I have used the Snap javascript library to create simple web page animations to tell a story. One example is our fantastic trip through Japan.

The premise is to use the scroll position of the page to represent passage along a journey. 

The workflow is to create an SVG image (I use Inkscape) and then to link the properties (such as line position or colour) of a specific part of this image to the scroll position on the page. You can take a look at the full javascript by inspecting this page. The main function called each time a new scroll position is found is something like the below.

```javascript
function drawMap(scroll_pos, limit) {
  var s = Snap("#someID");
  var path = s.select("#trainPath");
  try {
    var scrolled = s.select("#scrolled");
    scrolled.remove();
    var len = Snap.path.getTotalLength(path);
    var value = len * (scroll_pos / parseFloat(limit));
    var subPath1 = path.getSubpath(0, value);
    var subPath2 = path.getSubpath(value, len);
    var subPat1 = s.path(subPath1);
    subPat1.attr({ "id": "scrolled", "stroke": "red", "stroke-width": "1.5", "fill": "none", "line-cap": "round" });
    var y = Math.floor(450 - 400 * (scroll_pos / parseFloat(limit)));
    s.attr({ viewBox: "0," + y + ",900,300" });
  } catch (error) {
    console.error('no scrolled element yet');
  }
}
```
Here we select the SVG which is in a div with ID #someID. Then from this we select the exact element (#trainPath) that we want to edit.
The scroll position is and input to the function and we can split the path based on the scroll position and the max possible scroll position. Then we replot the sub paths which together make up the whole path.

Setting the viewbox correctly is important to get this to look reasonable on both mobile and desktop. To get the image to remain at the top of the page some css is used.
```css
  .container {
  position: sticky;
  position: -webkit-sticky;
  top:0;
  background-color: white;
  z-index:10;
  height: 20vh;
  overflow: hidden;
}
```

This is all build into the jekyll page and I can update this for different posts to select different base images and change the code within the drawmap function.

The elevation style plots, such as that on the [Morocco]({% post_url 2020-05-18-Morocco-2018 %}) page are created by using a python script to parse the gpx file of a route and output an svg path. Then a gradient fill can be used and the position of the gradient fill line is dynamically adjusted. Since most of my adventures involve some cool elevation gain/loss I quite like this.

### Part 2 - Jekyll integration
Adding JS scripts via a markdown file in Jekyll was a small challenge. Ultimately I put the JS files into the static directory under /assets/js

I then add a short piece of code to the default.html in _layouts. This tells the page to look for items in the jsarr which is defined in the markdown file, then add these scripts.

```html
<!--
{% for js in page.jsarr %}
<script src="{{ base.url | prepend: site.url }}{{ js }}"></script>
{% endfor %}
-->
```

Finally the JS files are added in the markdown header as follows. The first file is the general snap.svg js file which enables the SVG manipulation. The second file is specific for the animation on that exact page.
```css
jsarr:
  - /assets/js/snap.svg.js
  - /assets/js/japan.js
```
</div>
---
title: String Art
layout: post
date: '2021-02-02 21:30'
headerImage: false
tag:
  - art
star: false
category: post
author: joshcarr
description: String Art
published: true
---
<div markdown="1" class="contentCont" id="scroll">

Last year for Christmas I made the [dithered sticker art thing](https://algorithmic-art.firebaseapp.com/). It was fun, so I tried something similar for 2020.

Again the idea was to use an input image and an algorithm to overcome my lack of artistic talent. As a kid, I enjoyed drawing a curve with a ruler, so when I saw the work of [Petros Vrellis](http://artof01.com/vrellis/works/knit.html) I thought it was worth a go. 

Keeping in theme the image selected was a pet portrait. 

I wrote some code in Python, the essence of the algorithm is to have fixed lines between pins. Each line has associated pixels that darken. 

From each position it's quite simple, we just have to evaluate the best next line and then update the image we're evaluating to take into account this.

Something like
```python
currentPin = 0
pinList = [0]
for line in range(nlines):
  bestPin = inf
  for pin in pins:
    lineDarkness = calculateLineDarkness(image, pin)
    if lineDarkness > bestlineDarkness:
      bestLineDarkness = lineDarkness
      bestPin = pin
  pinList.append(pin)
  image = updateImage(currentPin, bestPin)
  currentPin = bestPin
```

The great thing about this is that we can visualise what it's going to look like by plotting these lines. Then we can tune the parameters (number of pins, darkness reduction per line, line width) to create by eye the best likeness of the original image.

Practically speaking the construction was relatively simple. I used a bike wheel rim as the circular frame and put 126 equally spaced pins in. I exported the pinList to an excel file and worked my way through simply winding around the next pin each time. It took probably 6 hours of winding for the 1200ish lines. It was nice to see it gradually come together. Here's the final result:
![molePicture](/assets/images/algoart/mole.jpg){:class="img-responsive"}

In hindsight... it's a bit big. It looks better from a distance where the eye starts to blur the thread together. Perhaps it will be installed outdoors. We'll find out after the COVID debacle calms down.


The [next level version](https://news.artnet.com/art-world/ani-abakumova-thread-art-computer-1626352) (thanks Russia) is to include colour. But I think next year I'll aim for something 'novel'.

</div>
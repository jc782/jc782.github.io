---
title: Dithered Sticker Art
layout: post
date: '2020-05-19 20:10'
headerImage: false
tag:
  - project
star: false
category: post
author: joshcarr
description: Artwork by algorithms
published: false
---

I am not particularly artistic. Nonetheless, I can try, and one aspect I have found enjoyabe is creating artwork by abstracting photographs. It was something we did in school once, and in 2019 I decided to have another go, but in a more formulaic way. 

The original plan convert a photo into a piece of art where the pixels were represented by push pins. Unfortunately it would have been a relatively expensive piece of art with push pins even if I sourced them from Alibaba. Instead I compromised on dot stickers often used to mark stationary.

The starting photograph, I decided, was one of my parents Border terrier standing in her characteristic pose.
![ribble](/assets/images/algoart/ribble.JPG){:class="img-responsive"}

The colours available were set by the stickers that I could easily buy.

My initial naive attempt was to reduce the resolution of the image to the target resolution and to set each pixel to be the closest colour defined by a cartesian distance in RGB space. The psuedo code being something like

```python
colours = 
minDist = inf
pixel = [r,g,b]
for col in colours:
    dist = (r-col.r)**2 +(g-col.g)**2 +(g-col.g)**2 + 
    if dist < minDist:
        minDist = dist
```

This does something. But probably isn't the best we can do.
![ribble](/assets/images/algoart/nodither.png){:class="img-responsive"}

Some research and I discovered the world of dithering. There are numerous algorithms.
![ribble](/assets/images/algoart/dither.png){:class="img-responsive"}




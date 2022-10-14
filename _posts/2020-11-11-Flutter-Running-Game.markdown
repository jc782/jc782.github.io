---
title: Audio-pong! GPS Enabled.
layout: post
date: '2020-11-11 22:10'
headerImage: false
tag:
  - project
star: false
category: post
author: joshcarr
description: Android app to play Pong! with gps input and audio output.
published: true
---

I have never built an app. I've decided, with lockdown v2.0, it's time to do just that. 

I want to keep things relatively simple, but also make something 'interesting'. My concept is quite a basic one. Create an 'arcade game' that uses GPS data streamed during a run/cycle as the input control mechanism.

There are a number of challenges I'm expecting to face:
* Is the data stream for speed / position sufficiently high quality to feel like you are in 'control'
* Realistically until AR glasses are a thing the interaction will be limited to audio feedback
* I've never built an app before... the learning curve could be steep


### Target
The targets in order of difficulty are:
1. Create an app that runs on my phone and enables me to play a game while running (and looking at my phone) [x]
2. Augment the above app with audio data to make it 'hands free' [x]
3. Create a UI that enables other players to adapt the settings to be suitable for them [x]
4. Release to the Play store []
5. Create a database for 'high scores' []
6. Enable players to play live against each other []

I'm benchmarking 'success' as anything beyond level 1. I'm giving myself a few weeks to have a go at this. Target is to 'ship it' in December 2020.


### Progress - Week 1
I have decided to build the app with 'Flutter'. It seems relatively simple and offers cross platform capability. I like that it delivers a native experience. It's not designed for games, but equally I'm not trying to make the next Battlefield. I'm going to try and build 'Pong' where the height of the paddle is changed by moving faster/slower than a reference speed. I've started just by installing flutter and its requirements, and following a couple of simple tutorials.

### Progress - Week 2
I've built out the basic UI and game mechanics. Testing is all on an emulator. I'm using the geolocator plugin to capture speed information, but at present this is not part of the control loop. The next step is to implement the geolocator as part of the game loop, and also try some 'On device' testing.
I still need to work out a mechanism for 'Audio Pong' which generates the audio files on the fly.

### Progress - Week 3 & 4
Testing on my phone now; makes things much smoother. 'Audio Pong' is implemented and is a mind bender. I'm unconvinced my brain can handle this. My implementation is 90% there & therefore has another 90% to go. I will fix a few bugs then decide whether to publish. It has been fun to learn a new language / skill nonetheless.

### Summary
Over the break I didn't make any progress on this, but I have decided that the full audiopong is too hard (for the player, not to code) and an even simpler Flappy Bird style game could work better.
Learning about Flutter has been useful - and I feel like I could develop a simple app in the future if I want to. I may come back to this and launch something on the play store 'just for fun'.

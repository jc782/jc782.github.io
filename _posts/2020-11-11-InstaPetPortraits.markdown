---
title: InstaPetPortraits
layout: post
date: '2020-12-01 22:10'
headerImage: false
tag:
  - project
star: false
category: post
author: joshcarr
description: Automatically generating cool pictures of pets.
published: false
---

Last year I saw some neat pictures in a pub of a dog photoshopped to appear as a knight. My parents have a dog named Tiber, and I thought 'How hard can it be' to generate those images with software? 

I also wanted to make this a tool that others could use and enjoy (maybe).

## Step 1
First, check that the hard bit is even vaguely feasible.

## User Workflow
I decided the workflow should be:
1. User uploads image
2. Generate artwork

I want this to work without logging in as a user which creates some interesting challenges with keeping data client-side. 

## Stack
Having used Django before I decided to make that the backend. Hosting is simple on pythonanywhere and it also meant I could easily integrate OpenCV to do the image manipulation. Front-end interaction for user inputs/backend interaction was AJAX. I should probably learn something 'modern', but I've yet to find anything I can't do with this approach, so it seemed good enough for me.

There was also integration to three separate APIs. To fulfill orders the Pwinty API allows automatic order creation and fulfillment. However, it does not include payments. Stripe seemed like an obvious choice for payments. For order confirmation, I wanted emails sent so decided to integrate with Mailgun.

## Challenges
Getting something that could create images automatically was challenging. This was especially true for more complex images. To make life easier for the algorithms I implemented a user input to define the position of the pet's head and eyes. The algorithm itself is a version of OpenCVs grabcut. This could be considerably improved by further tuning. Presumably, an ML model would crush this; but that seemed like a project in itself.

To enable payments and image creation without the user logging in was not simple. I solve this by generating a UUID which the client can pass to the backend and to Stripe. Marrying these up enables confirmation that a payment is associated with a particular order. 

## Future
Everything sort of works but I have decided not to continue developing this. 




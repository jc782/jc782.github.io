---
title: Wanhao i3 mini - Upgrades
layout: post
date: '2020-09-20 22:10'
headerImage: false
tag:
  - project
star: false
category: post
author: joshcarr
description: Simple upgrades to a basic 3D printed
published: false
---

The Wanhao mini (or equivalent) is a basic FDM printer. I've had some good results from it since getting it a few years ago but have always been frustrated by a few issues. The biggest issue is bed adhesion, and the second biggest the frustrating bed size. This post details my attempt to add a heated bed and increase the bedsize.

The printed has connectors for a heated bed but the V1 printer does not come with this installed. 

The steps to the process are:
* order the parts
* Mechanical installation
* Electrical wiring 
* Firmware upgrade

What you will need:
- Silicon heated bed. I have decided to use a 12V DC one. This is better because there's less chance of having mains exposed but slightly more expensive both for the bed and for the electronics
- New, beefy power supply. The bed is going to need a couple of hundred watts. 
- Mosfet board [high current 12V mosfet] 
- Misc cables

The first step is to install the heated bed onto the platform. The print platform is not the centre of the bed. It makes sense to position this underneath the print area.

We then wire up the thermistor to the main PCB and the power through the MOSFET. The MOSFET is driven by an output from the main board, which is in turn controlled by a control loop running on the thermistor.

The mosfet can be mounted inside the printer housing to keep everything neat. 

The external power supply can be wired to the switch on the back of the printer and can provide the power for the printer as well as the heated bed.

Finally the firmware should be updated. I've used this one. 





Nb there is a slightly simple 'poor mans' option to install a heated bed without requiring integrated electronics or firmware updates. This is to create a separate bed heating circuit using an external power supply and controlled by a temperature based relay such as the W1209 board. I initially took this route and it worked well enough, but I got frustrated by needing to manually turn the bed off when a print finished rather than letting the printer firmware do this.


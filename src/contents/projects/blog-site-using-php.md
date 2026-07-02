---
title: "Blog Site using PHP"
description: "This is my first blog site using PHP, MySQL. It has flaws and the UI feels sluggish, btw its a old school project :)"
technologies: ["PHP", "SQL", "PHPMailer", "VideoJS", "Bootstrap"]
hosted: Plexaur
tags: []
date: 2023-07-20
github: ""
live: "https://blog.plexaur.com"
draft: false
featureOrder: 0
---

Hey Everyone,,

I was learning web development back then. At that time I thought to build a _blog website_. But I don't know how to make all that in.

For the god's sake I was learning `PHP` instead of `MERN Stack`. But _PHP_ helped me in college to get good marks..

yes, come to the story...

Previously I learned `Bootstrap` and build a simple static website. Later I integrate PHP and MySQL into it.

- Created User and Admin sessions.
- And a feature to blog post in it from the users profile (Anyone can post any blog in it.).

This is the basic features I added in the start. After a while I learned so much. we got a Shared Hosting server with PHP support. And I hosted the application in it.

It was really exciting to see my work in online. We have a SMTP server and I started to develop a forgot password with a expiration token. The token will only valid for 1 hour.

When a user requests for a password change, we will fetch if the user is available, if available we will generate a key and store it with the current time and set a expiry date along with it. And send it into user's mail box.

From there the user can change password of their Account.

Later I implemented change username and email.

_Wooh!! When this gets work in online I am totally excited and happy_

After a few months, I integrated video support where only admin can post videos and delete videos. Only the logged user can access the video section. Rest are bared from there.

Videos have unique keys like `youtube` and I used `VideoJS` for the video window. User can share the video and it will auto copy the link with unique video key to users clipboard. If the user open the link in video, the video will open in seperate window and barred from the rest of the videos.

Also Blogs can only be deleted from Admins side.

> Hahaha! One guy from my college tried to break the login system and brute forced and tried SQL Injection.

Because of my Strong Implementation on the security side. It really helped. But our shared hosting got DDOS and the hosting provider helped us to get back to hosting panel.

_I fight a long journey on PHP and yet I still on top of it._

**Thank you guys for reading this...**

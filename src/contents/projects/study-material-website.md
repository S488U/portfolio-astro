---
title: "Study Material Website"
description: "A PHP based hub hosting BCA & MCA study materials, lab programs, and records from Srinivas University."
technologies: ["PHP", "Bootstrap", "AnimateCSS", "CodeMirror", "MariaDB"]
hosted: Plexaur
tags: []
date: 2023-09-07
github: "https://github.com/s488u/college"
live: "https://plexaur.com"
draft: false
featureOrder: 3
---

#### A small blog

Hi Everyone,
This is one of my largest project I've done using `PHP` and it is the most **starred** project in my GitHub.

I've developed study material for myself to hold my college works in a repository for future look ups. But when the time of exam I see students are repeatedly asking teacher for the PDF's and study materials for the exam.

At that time I thought why don't you create a website where all the types of files are stored in a single place. From there students can access it.

I started working on the project in exam times and a I added PHP to the project and created a neat UI for to access the work.

First I only added BCA study materials, and lab programs, later I given accessed the repo for my friend and he started to push the documents to the git.

I know pushing large documents on the Github is not a great idea. But for temporary I've done like that. And still it is like that.

I rendered the pdf's and lab programs name in the screen, when a user clicks, the link will open up a pdf opened web page were the students can download the pdf.

But I have a problem for lab programs. we are also learning `PHP` and `MySQL` in the Lab Session. But those programs are also there. Displaying the file when user clicks the link will get execute the PHP in the server side.

I got a idea to implement it. I blacklisted some directories not to render php programs and I scanned all the directories and get the text from the file were the user requested and displays it on the screen.

The code are formatted by default and I used `PrismJS` to make code color highlight.

And I implemented a custom quote window in nice code display UI with line numbers and all. You know why I implemented??
I implemented because if the files or lab programs or else the link is broken, it defaults the user to quote window A.K.A error window.

Later I redesigned the web with `Bootstrap` and `Animate CSS`.

- Implemented custom link for each page.
- Enabled link sharing for each documents.
- Added font zoom and full window functionality for lab programs.

My web started to get popularity in BCA students. And students started to use my web for copying lab exams. I know its violation and I can't able to suspend the web on the time of exam, because other BCA batch students are also learning from the web. Because our custom lab programs are shorter and easy to understand the college lab programs.

The exam is conducting for each batch in different time. So, I implemented a warning message and a warning section where all students need to agree with the policy and I collect the public IP of the users.

I tackled one of the most complex problems in one go.

Later I added support for students to upload pdf with compressed zip file to add.

My MCA friend started to gather MCA study material and helped me to host it in the web.

- After a few months I integrated to run the php programs safely on our server. Used `CodeMirror` for live coloring and code box.

**_It is a huge win for me.._**

I implemented `Google Analytics` for the web and _shocked_ to see the users in the web when near the exam time. _Still the web is using by our juniors._

_**And I planned to Port the entire web to **`MERN Stack`** with newer architecture.**_

If you want to see the future updates, _star our project in the **Github**_

_**Thank you guyss for reading the blog..**_

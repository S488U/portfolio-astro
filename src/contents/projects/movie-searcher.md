---
title: "Movie Searcher"
description: "A Vanilla JS movie and series search app that fetches details from the OMDb API."
technologies: ["HTML", "Javascript", "Bootstrap"]
hosted: Github
tags: []
date: 2024-01-10
github: "https://github.com/s488u/Movie_API"
live: "https://s488u.github.io/Movie_API/"
draft: false
featureOrder: 0
---


Hi everyone,

This project was one of my academic projects. 

We had to do a mini project for the 3rd Semester. Everyone was searching for ideas, looking for existed projects on  Github. 

I already have a basic idea of what technologies to use. I don't want to use or experiment with any large frameworks. Because the time was limited. 

I chose *HTML, Bootstrap and Vanilla JS*. But still i dont know what project I needed to build. 

I searched for some open free APIs. Finally I found the **OMDb API**(Open Movie Database). It looked nice and promising for my project. 

I went to the site, created an account and got the api key. 

Then I started working on the website.

#### Step 1: I began creating UI page.
For a starter like me, without having any UI ideas. It's a bit hard to start. 

Yeah! I don't have any choice but to start it. I began creating the landing page, then Movie search bar, cards to display and all. Once the landing page was completed. It became much easier to do other pages.

I worked on the individual movie details page
#### Step 2: Started implementing the functionalities. 
I started to implement JavaScript. At first it was very simple:

```js
if(input) {
 return Movies;
} else {
 return Null;
}
```

Yeah, it  felt easy at first. But I am not satisfied. I planned to integrate user based sessions and custom favourite lists. 

But my project was fully static. I didn't have a database. I began to use `LocalStorage` as my database. 

First I implemented `Sign In`, `Sign Up`, `admin` and `favourites` pages. 

Began to implement:
- Search History.
- Session saving.
- Credentials Update settings.
- Add to favourite function.

##### Problems Arose
I began to get problems on implementing  the Favourites functionalities. 

> What if the user submitted the add to favourite very fast and it duplicates the data in favourite page?

I thought to filter every movie id on each other. But its not a good DX. And I remembered Javascript have `Set()` operations available. `Set()` operations does not allow duplicate values. 

So it saved me. 

#### Conclusions.
This was one of my best project I worked with external API's. And this project gives me a good Internal mark for my 3rd semester.

*This is what I experienced, This is what I enjoyed!!*

*Thank you everyone for reading this!!!!*
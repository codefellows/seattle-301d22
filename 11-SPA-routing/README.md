![CF](https://i.imgur.com/7v5ASc8.png)  Class 11: Single Page Apps & Client-Side Routing
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*Today we will explore client-side route-based functionality to create a more performant and modular single page web application. These routes should be simple, with a single callback to render the page to the DOM.

The lab starter code is completely reorganized such that the scripts/ directory now has subdirectories for the controller/, model/, and view/ scripts, and with some functionality/methods being relocated.

We need to be attentive to when a server request is being made versus when the routing is intercepted and handled in the browser. As our blog app is getting more sophisticated, we are finding new ways to blur the separation of concerns, in this case offloading some of the Controller responsibilities into the View layer.*


## Daily Plan

<!-- - One-on-one meetings: I'd like to do a 15-minute one-on-one meeting with each of you to assess how things are going and help you move forward in the best way. Visit [this link][https://sam-301d20.youcanbook.me] to schedule a time; this will flow directly into my calendar.

- Code Review

`BREAK (10 minutes)`

**Slides: Routing & Controllers**

**Single-Page Apps**

- Why single page?
	1. Performance trade-offs
	2. User experience

- jQuery’s role so far
	1. Event handling for our tabs
	2. Will still be hiding and showing content

- Benefits of adding a ‘route’ to our page
	1. Lets user (and browser) believe they are navigating
	2. Updates History API to allow for ‘forward’ and ‘back’ actions

**Look at PageJS repo**

- Hands-on PageJS example: clone [this repo](https://github.com/codefellows/301-11-page-js-demo.git) and let's build it out!

`BREAK (10 minutes)`

**More on PageJS...**

- History API in the browser
	1. `history` is just an object
	2. It has a length property

- Head to another page & check the history length again

- Now use some methods like ‘go’ ‘forward’ and ‘back’
	1. Length will update based on pushState
	2. It cannot be directly modified!

- Client-side routing
	1. How to use page.js
  2. Look at how `history` is used in PageJS
	3. Docs!

**Review of the code for lab** -->


## Learning Objectives
<!--
ABCD:
  Audience: Program participants
  Behavior: Expected learning/behavior changes/results
  Condition:
    Circumstances that lead to change/result
    When change/result are expected to occur
  Degree: How much change occurs (%) for how many participants (#)
-->

* Identify useful urls for an app, and be able to implement those routes given the new library presented.

* Recognize other server technologies such as node, new dependencies

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* JS&jQ: 424-427 (History API) (Essential)

* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)

* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)

![CF](https://i.imgur.com/7v5ASc8.png)  Class 7: NodeJS & NPM

=======

## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

Things are starting to change in a big way as we start looking at how server-side code works. The core lab task today is to build out a server.js file using Express that will replace the functionality students have been getting from live-server up to this point.

*Note: Today's lab is another one that is on the lighter side, but starting tomorrow, the next three labs are probably the toughest of the course. Resist the temptation to coast once you've completed today's lab! Make sure that you understand EVERYTHING in the starter code inside and out!!!*

---

## Daily Plan

<!-- - Code Review: The goal for today is to ensure that we have solid understanding of the architecture of the blog app, and what all of the individual pieces are doing, and how they interact.

- [JSONLint](http://jsonlint.com/) is your friend when you are trying to create JSON for your portfolio assignment. It will help your track down malformed JSON.

`10 minute break`

- Let's quickly review the WRRC
- What is NodeJS?
- What are NPM, dependencies, and `package.json`?

- **Two main ways of working with Node/NPM projects**
	- 1. The project is already made; you're just using it
		- Clone the repo (or a fork of it)
		- `cd` into the repo, verify that there is a `package.json` with dependencies listed in it, and run `npm install` in the terminal
		- A bunch of stuff should install into a `node_modules` directory that is created automatically, and you're ready to go!
	- 2. You are creating a new Node/NPM project
		- Once the project directory is scaffolded, run `npm init` in the terminal from the root level of the project directory
		- This will ask you a series of questions that will create and set up a `package.json` file
		- As you identify NPM packages you want to add as dependencies to your project and are ready to use them, enter `npm install --save <dependency_name>` in the terminal, which will save the dependencies into a newly created `node_modules` directory and also keep track of them in the `package.json`
		- Be sure to `.gitignore` your `node_modules` directory!
		- You're ready to share your project with the world!

- `npm i -g nodemon` FTW (live reloading when your code changes)
- ExpressJS overview
- Let's clone a repo and look at how to get it up and running: [Hour Long Lunch](https://github.com/bentongreen/hour-long-lunch)

`10 minute break`

- Code demo: Let's make a Node-powered server!
	- Clone the [301 Express demo](https://github.com/codefellows/301-7-express-demo) repo into your main 301 directory. It has no Node action... yet.
	- `npm init` to initialize it as a Node project
	- Install: ExpressJS
	- Write server.js, some helpful docs:
		- [Node: 'require'](https://nodejs.org/api/modules.html#modules_module_require_id)
		- [app.use()](https://expressjs.com/en/api.html#app.use)
		- [app.get()](https://expressjs.com/en/api.html#app.get.method)
		- [app.listen()](https://expressjs.com/en/api.html#app.listen)
- Lab Prep
	- Let's review the starter code and TODOs! -->

---

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

* Understand client-server architecture
	* Review the differences between the Browser Runtime env and Node's Runtime env
	* Usage and best practices when implementing a NodeJS project using NPM packages and package.json configs
	* Understand the basics of working with ExpressJS for server-side routing and functionality

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

- [Node.js introduction on tutorialspoint.com](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)
- [An Introduction to Node.js" on sitepoint.com](https://www.sitepoint.com/an-introduction-to-node-js)
- [The Node Beginner Book](http://www.nodebeginner.org/)

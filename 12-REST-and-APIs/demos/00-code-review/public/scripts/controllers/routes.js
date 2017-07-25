'use strict';
var app = app || {};

// TODO: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE.
page('/', app.articleController.init)
page('/about', app.aboutController.init)
// TODO: What function do you call to activate page.js? Fire it off now, to execute. Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
page()

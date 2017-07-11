//*****basic selectors*****//

//element
$('div')
$('section')
$('html')
$('p')
// document.getElementsByTagName('div')

//class
$('.container')
// document.getElementsByClassName('container')

//id
$('#home')
// document.getElementById('home')

//parent descendent
$('header li')

//parent > child
$('ul > li')
$('.nav-list > li')

//attribute
$('input[value="someVal"]')
$('input[type="number"]')


//*****basic manipulations*****//

//get text of the matched element(s)
$('#home').text()

//set text of the matched element(s)
$('#home').text('Scott was here...')

//get html of the matched element(s)
$('#main-content').html()

//set html of the matched element(s)
// $('#main-content').html('<h2>Scott was here</h2>')

//get the data-category attribute of an li
// $('p').data('rank')

//set the data-category attribute of an li
$('p').data('rank', '2')

//create and append an element to the DOM
$('#main-content').append('<section></section>')
// var someUl = document.createElement('ul')
// someEl.appendChild('')

//remove an element from the DOM
// var savedContent = $('#main-content').remove()

//empty the selected element of all HTML
// $('#main-content').empty()

//run a command as soon as the DOM loads
$(document).ready(function() {
  // do all the codes
  var x = 25
})

//shorthand method
$(function() {
  // do all the codes
  var x = 30
})

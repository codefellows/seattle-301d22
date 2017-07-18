'use strict'

let next, prev

const successCallback = function(data) {
  console.log(data)
  next = data.next
  prev = data.previous

  let template = Handlebars.compile($('#template').html())
  $('#app').html(template({persons: data.results}))
}

const errorCallback = function(err) {
  console.error(err)
}

$.getJSON('https://swapi.co/api/people')
.then(successCallback, errorCallback)


// $.getJSON('https://swapi.co/api/people/1', function(data) { // 1MB
//   // do all the data
//   $.getJSON('https://swapi.co/api/people/2', function(data) { // 50MB
//     // do all the data
//     $.getJSON('https://swapi.co/api/people/3', function(data) { // 100MB
//       // do all the data
//     })
//   })
// })



$('#next').on('click', function() {
  $.getJSON(next)
  .then(successCallback, errorCallback)

  someOtherFunction()
})

$('#prev').on('click', function() {
  $.getJSON(prev).then(successCallback, errorCallback)
})

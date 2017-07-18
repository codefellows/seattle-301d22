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


$('#next').on('click', function() {
  $.getJSON(next).then(successCallback, errorCallback)
})

$('#prev').on('click', function() {
  $.getJSON(prev).then(successCallback, errorCallback)
})

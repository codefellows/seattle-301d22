'use strict'

$(function() {
  $('.tab-content').hide()
  $('#scott').click()
  // $('.tab-content#delegation').show()
})

$('.nav-items > a').on('click', function() {
  $('.tab-content').hide()
  $('#' + $(this).data('tab')).show()
  // $('#delegation')
})


$('button').on('click', function(event) {
  event.preventDefault()
  $('#' + $(this).data('menu')).append('<li>Boom Stick</li>')
  // $('#menu1') => This is what that concatenated selector is providing as a final value
})

$('.menus').on('click', 'li', function() {
  console.log(this);
})

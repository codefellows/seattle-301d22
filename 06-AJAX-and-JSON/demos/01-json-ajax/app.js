'use strict'

// Low level ajax request
// $.ajax({
//   url: 'https://swapi.co/api/people/5',
//   type: 'GET',
//   success: function(data) {
//     console.log(data)
//   },
//   fail: function(err) {
//     console.error(err)
//   }
// })


// Shorthand GET request using done, fail and always
// $.get('https://swapi.co/api/people')
//   .done(function(data) {
//     console.log('Done', data)
//   })
//   .fail(function(err) {
//     console.error('Fail', err)
//   })
//   .always(function() {
//     console.log('Always: Yep, I ran anyways...')
//   })


// GET request using .then syntax
$.get('https://swapi.co/api/people')
.then(
  function(data) {
    console.log(data)
  },
  function(err) {
    console.error(err)
  }
)

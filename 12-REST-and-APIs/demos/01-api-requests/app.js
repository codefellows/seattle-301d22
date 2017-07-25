'use strict'

// Make an authenticated request to github's api to get the generic endpoints for their API
// $.ajax({
//   url: 'https://api.github.com',
//   method: 'GET',
//   headers: {
//     Authorization: `token ${GITHUB_TOKEN}`
//   }
// })
// .then(
//   data => {
//     console.log(data)
//     Object.keys(data).forEach(line => $('#results').append(`
//         <li>${line}: ${data[line]}</li>
//       `)
//     )
//   },
//   err => {
//     console.error(err)
//   }
// )

// This will not work, the api doesn't know who we are
// $.get('https://api.github.com/user')
// .then(
//   data => {
//     console.log(data)
//   },
//   err => console.error(err))

$.ajax({
  url: 'https://api.github.com/user',
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})
.then(
  data => {
    console.log(data)
    $.get(data.repos_url).then(console.log)

    // Object.keys(data).forEach(line => $('#results').append(`
    //     <li>${line}: ${data[line]}</li>
    //   `)
    // )
  },
  err => {
    console.error(err)
  }
)

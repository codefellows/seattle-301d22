'use strict'

const pg = require('pg')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

const conString = 'postgres://localhost:5432/rolodex'
let client = new pg.Client(conString)
client.connect()

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: true}))

app.get('/api/users', function(req, res) {
  client.query('SELECT * FROM users')
  .then(console.log)
  .catch(console.error)
})

app.get('/api/users/:id', function(req, res) {

})

app.post('/api/users', function(req, res) {
  // console.log(req.body);
  client.query(
    `
      INSERT INTO
        users(first_name, last_name, cell, email)
      VALUES($1, $2, $3, $4)
    `,
    [req.body.first_name, req.body.last_name, req.body.cell, req.body.email]
  )
  .then(function(data) {
    console.log(data)
    res.status(201).json('Successfully created a user!')
  })
  .catch(function(err) {
    console.error(err)
    res.status(400).json('Something went wrong with you request')
  })
})

app.put('/api/users', function(req, res) {

})

app.delete('/api/users/:id', function(req, res) {

})

app.delete('/api/users', function(req, res) {

})


app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`)
})

'use strict'

const express = require('express')
const bodyParser = require('body-parser').json()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

app.get('/hello', function(request, response) {
  response.send('<h1>world</h1>')
})

app.get('*', function(request, response) {
  response.status(404).send('<h1>You done did it now Chuck</h1>')
})

app.post('/flibbity', bodyParser, function(request, response) {
  console.log(request.body)
  response.send('Nice work.')
})

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`)
})

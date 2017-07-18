'use strict'

let express = require('express')
// let bodyParser = require('body-parser')

let app = express()
let PORT = process.env.PORT || 3000


app.use(express.static('./public'))

app.get('/article', function(req, res) {
  console.log('made that request')
  res.send('You did the article thing')
})

app.listen(PORT, function() {
  console.log(`Listening on port:" ${PORT}"`)
})

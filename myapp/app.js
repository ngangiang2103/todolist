var express = require('express')
var app = express()

app.get('/demoget', function (req, res) {
  res.send('Hello World!')
})

app.post('/demopost', function (req, res) {
  res.send('Got a POST request')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
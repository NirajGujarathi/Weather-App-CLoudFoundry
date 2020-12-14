var express = require( 'express')
var app = express()

app.get('/hello', function (req, res) {
    res.send("hi... niraj")
  })
app.get('/', function (req, res) {
    res.send("get...AIT exp 4")
  })
app.post('/', function (req, res) {
    res.send("post...")
  })
app.use(function (req, res, next) {
    res.status(404).send("404 error Sorry can't find that!")
  })
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  

app.listen( process.env.PORT || 4000)
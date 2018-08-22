const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('index.html')
})

app.listen(5555, function() {
  console.log('listening start on http://localhost:5555')
})

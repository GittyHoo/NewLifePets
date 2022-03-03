const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {engine} = require('express-handlebars')
const port = 1337
// setup the view engine and create views folder
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
// bodyparser allows us to read data being sent from the browser to our server
app.use(bodyParser.urlencoded({ extended: false}))
// parse application JSON
app.use(bodyParser.json())
// set the static folder
app.use(express.static('static'))

// this is the home route - it renders the home template located in the views directory
app.get('/', function(req, res) {
    res.render('home')
  }
)
// this is the about route - it renders the about template located in the views directory
app.get('/about', function(req, res) {
    res.render('about')
})
// this calls the listen function and spins up my server - so i can navigate to localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



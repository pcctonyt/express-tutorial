//express middleware, which is everywhere in express, are functions that execute during the request to the server from the user, when working with middleware, YOU MUST MUST MUST PASS IT along to the next middleware unless terminating the whole cycle by sending back the response

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// request => middleware => response
// we have the home and about routes we want the method, url and ex. date that the user is using, you would have to keep cutting and pasting these consts for each route without a middleware function you could just attach willy-nilly as needed, it allows us to literally do whatever we want with that next parameter, looking to cut down on the app.js clunkiness with the separate logger.js file and then add the middleware functions, the order matters, if app.use below 1st app. get, nothing in the console on the home

app.use([logger, authorize])
//this makes this /api apply to any other called routes after it
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//API in express is setting up an http interface, sent using json, res.json() sends back the response, ssr stands for server side rendering, use res.render() method, he picked the API option, to focus more on the actual express setup, if i grasp api way, no problem using the templates with ssr later, we will be responsible for sending back the data on backend, regardless of the frontend framework -- React, vanilla JS, or Svelte etc.

const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware static file is one express.js doesn't have to change no need to create a path for each resource on the page, the javascript resource makes it dynamic on the browser, but express sees it as static, this navbar doesn't display the user's name when he/she logs in

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
  //can use .join() instead of .resolve()
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

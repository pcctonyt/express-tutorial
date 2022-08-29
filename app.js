const express = require('express')
const app = express()

const people = require("./routes/people")
const auth = require("./routes/auth")

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use("/api/people", people )
app.use("/login", auth )

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})






//Node.js and Express.js full course 8:16:47 (use postman.com after this point 7:20:09) course completed 8/29/2022 Monday; by john smilga

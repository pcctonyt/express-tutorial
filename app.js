


const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
   res.json(products);
})



app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})




//Node.js and Express.js full course 5:33:02 stopped off at john smilga

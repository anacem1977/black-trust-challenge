const express = require("express");
const app = express();

const fibonacci = require("./models/fibonacci")

app.get("/fibonacci/:id", (req, res) => {
  if (req.params.id > fibonacci.length) {
    return res.send(`n should be between 0 and ${fibonacci.length}`)
  } else {
    res.send(fibonacci[req.params.id])
  }
})


app.listen(3005, () => {
    console.log("My app is set up and running");
});
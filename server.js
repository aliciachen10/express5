//to deploy the app, here are the commands

// heroku auth:login
// git init
// git add -A
// git commit -m "Initial commit"
// heroku create
// git remote -v
// git push heroku master

const express = require("express");
const path = require("path")

//ask it to use environmental variables that you can assign values and it can take values
//heroku is defining automatically, and if we don't find that PORT variable, use 3001
const PORT = process.env.PORT || 3001 
const app = express();

//import the middleware stuff 
app.use(express.static("public"))

//if app is running we will send index.html to the user
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})


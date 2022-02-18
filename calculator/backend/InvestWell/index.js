const express = require("express")
const bodyParser = require("body-parser")
const router = require("./routes/index")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", router)

app.all("*", (req, res) => {
  res.status(404).send({ error: "not found" })
})

app.listen(5000, () => {
  console.log("listening on port 5000")
})

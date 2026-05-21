const express = require("express")
const app = express()

app.get("/" , (req , res) => {
  res.send({
    id:1,
    name:"shah",
    isSucess: true
  })
})

const  PORT = 5000;
app.listen(PORT , () => {
    console.log(`Server is up on ${PORT}`)
})
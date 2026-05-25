const express = require("express")
const app = express()
const userRouter = require("./routes/auth.routes")
app.use(express.json())

app.use("/" ,userRouter )

const  PORT = 5000;
app.listen(PORT , () => {
    console.log(`Server is up on ${PORT}`)
})
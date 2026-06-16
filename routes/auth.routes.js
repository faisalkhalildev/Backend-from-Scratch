const express = require("express")
const router = express.Router()
const {addUser} = require("../controllers/auth.controller")

router.get("/" , addUser)
// router.post("/add" , )

// router.post()
module.exports = router;
const express = require("express")
const router = express.Router()
const {addUser , users} = require("../controllers/auth.controller")

router.get("/users" , users)
router.post("/users" , addUser)

// router.post()
module.exports = router;
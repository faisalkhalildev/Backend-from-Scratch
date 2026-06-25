const express = require("express")
const router = express.Router()
const {getUsers , register} = require("../controllers/auth.controller");

router.post("/register" , register)
router.get("/users" , getUsers);

module.exports = router;
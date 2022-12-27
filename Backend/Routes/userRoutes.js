const express = require("express");
const { registerUser, LoginUser } = require("../Controllers/userController");
const router = express.Router();

router.post("/register",registerUser);
router.get("/login",LoginUser);

module.exports = router;
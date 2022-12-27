const express = require("express");
const { registerUser, 
    LoginUser, 
    getUser,
    updateUser,
    changePassword } = require("../Controllers/userController");
const router = express.Router();

router.post("/register",registerUser);
router.get("/login",LoginUser);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);

module.exports = router;
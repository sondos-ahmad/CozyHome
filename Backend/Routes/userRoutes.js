const express = require("express");
const { registerUser, 
    LoginUser, 
    getUser,
    updateUser,
    changePassword } = require("../Controllers/userController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.post("/register",registerUser);
router.get("/login",LoginUser);
router.get("/getuser", protect, getUser);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);

module.exports = router;

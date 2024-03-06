const express = require("express");
const login = require("../controller/auth/login");
const signup = require("../controller/auth/signup");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;

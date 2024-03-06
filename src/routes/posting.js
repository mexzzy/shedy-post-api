const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const createPost = require("../controller/posting/createPost");
const addImage = require("../controller/posting/addImages");
const deletePost = require("../controller/posting/deletePost");
const getAPost = require("../controller/posting/getAPost");
const updatePost = require("../controller/posting/updatePost");

const router = express.Router();

router.post("/create-post", checkAuth, createPost);
router.post("/addImage/:postId", checkAuth, addImage);
router.delete("/delete/:postId", checkAuth, deletePost);
router.get("/get-a-post/:postId", checkAuth, getAPost);
router.post("/updatePost/:postId", checkAuth, updatePost);

module.exports = router;

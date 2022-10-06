const express = require("express");
const router = express.Router();
const postcontrol = require("../controllers/PostController");
const usercontrol = require("../controllers/UserController");
const categorycontrol = require("../controllers/CategoryController");

router.get("/", postcontrol.apiHome);
//users
router.get("/get-user",usercontrol.getUser);
router.post("/add-user",usercontrol.addUser);
// posts
router.get("/get-post", postcontrol.getPost);
router.post("/add-post", postcontrol.addPost);
router.get("/get-post-by-id/:id", postcontrol.getPostDetailsById);
//category
router.get("/get-category", categorycontrol.getCategory);
router.post("/add-category", categorycontrol.addCategory);
// blogs
router.get("/get-blog", postcontrol.getBlog);

//stories
router.get("/get-story", postcontrol.getStory);

//articles
router.get("/get-article", postcontrol.getArticle);

module.exports = router;
const postController = require("../../controllers/postController");

const router = require("express").Router();

router.get("/get-all", postController.getAllPosts);
router.post("/create", postController.createPost);
router.get("/get-one/:id", postController.getSinglePost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete/:id", postController.deletePost);

module.exports = router;
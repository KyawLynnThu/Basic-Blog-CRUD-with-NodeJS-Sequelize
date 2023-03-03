const commentController = require("../../controllers/commentController");

const router = require("express").Router();

router.post("/create", commentController.createComment);
router.put("/update/:id", commentController.updateComment);
router.delete("/delete/:id", commentController.deleteComment);

module.exports = router;
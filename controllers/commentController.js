const db = require("../database/models");
const Comment = db.comments;

const createComment = async (req, res) => {
  let commentData = {
    comment: req.body.comment,
    post_id: req.body.post_id,
  };
  const result = await Comment.create(commentData);
  res.json({
    message: "Comment created successfully",
    data: result,
  });
};

const updateComment = async (req, res) => {
  let id = req.params.id;
  await Comment.update(req.body, { where: { id: id } });
  res.status(200).send(`Comment Updated successfully`);
};

const deleteComment = async (req, res) => {
  let id = req.params.id;
  await Comment.destroy({ where: { id: id } });
  res.status(200).send(`Comment deleted`);
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};

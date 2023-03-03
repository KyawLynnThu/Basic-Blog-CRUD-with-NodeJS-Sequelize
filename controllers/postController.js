const db = require("../database/models");
const Post = db.posts;
const Comment = db.comments;
const fs = require("fs");

const getAllPosts = async (_req, res) => {
  let posts = await Post.findAll({
    attributes: ["id", "title", "description", "image"],
    include: {
      model: Comment,
      as: 'posts'
    }
  });
  res.status(200).send(posts);
};

const createPost = async (req, res) => {
  if (req.file) {
    image = req.file.path.replace("\\", "/");
  }

  let postData = {
    title: req.body.title,
    description: req.body.description,
    image: image,
  };
  const result = await Post.create(postData);
  res.json({
    message: "Post created successfully",
    data: result,
  });
};

const getSinglePost = async (req, res) => {
  let id = req.params.id;
  let post = await Post.findOne({ 
    where: { id: id }, 
    attributes: ["id", "title", "description", "image"],
    include: {
      model: Comment,
      as: 'posts'
    }
  });
  res.status(200).send(post);
};

const updatePost = async (req, res) => {
  let id = req.params.id;
  let checkPost = await Post.findOne({ where: { id: id } });

  if (!checkPost) {
    return res.status(404).send("Post not found");
  }

  if (req.file) {
    image = req.file.path.replace("\\", "/");
    if (checkPost.image && checkPost.image != image) {
      fs.unlink(checkPost.image, (err) => {
        if (err) console.log(err);
      });
    }
    if (image) {
      checkPost.image = image;
    }
  }

  let postData = {
    title : req.body.title,
    description : req.body.description,
    image: image,
  };

  await Post.update(postData, { where: { id: id } });
  res.status(200).send(`Post Updated successfully`);
};

const deletePost = async (req, res) => {
  let id = req.params.id;
  let checkPost = await Post.findOne({ where: { id: id } });

  if (!checkPost) {
    return res.status(404).send("Post not found");
  }

  fs.unlink(checkPost.image, (err) => {
    if (err) console.log(err);
  });
  await Post.destroy({ where: { id: id } });
  res.status(200).send(`Post deleted`);
};

module.exports = {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};

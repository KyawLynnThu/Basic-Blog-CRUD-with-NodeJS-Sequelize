const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const { v4 } = require("uuid");
const bodyParser = require("body-parser");
// const { rootDir } = require('./utils/deleteFile');
const path = require('path');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//file upload
const fileStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
      cb(null, "uploads");
  },
  filename: (_req, file, cb) => {
      cb(null, `${v4()}_${file.originalname}`);
  },
});

const fileFilter = (_req, file, cb) => {
  if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
  ) {
      cb(null, true);
  } else {
      cb(null, false);
  }
};
const rootDir = path.join(__dirname, "../../");
app.use(multer({ storage: fileStorage, fileFilter }).single('image'));
app.use("/uploads", express.static(path.join(rootDir, "uploads")));

app.get("/", (_req, res) => {
  res.json({ message: "Hello" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// routers
const postRouter = require("./routes/v1/postRouter");
const commentRouter = require("./routes/v1/commentRouter");
app.use("/api/v1/post", postRouter);
app.use("/api/v1/comment", commentRouter);

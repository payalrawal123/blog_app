const express = require("express");
require("dotenv").config;
const { connectionToDb } = require("./config/db.config");
const { userRouter } = require("./routes/userRouter");
const bcrypt = require("bcrypt");
const { userModel } = require("./models/userModel");
const { postRouter } = require("./routes/postRouter");
const { commentRouter } = require("./routes/commentRouter");


const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("get start run server");
});


app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(port, async (req, res) => {
  await connectionToDb();
  console.log(`Server run at port ${port}`);
});

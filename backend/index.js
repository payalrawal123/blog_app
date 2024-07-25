const express = require("express");
require("dotenv").config;
const { connectionToDb } = require("./config/db.config");
const { userRouter } = require("./routes/userRouter");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use("user", userRouter);

app.listen(port,async(req,res)=>{
    await connectionToDb();
    console.log(`Server run at port ${port}`);
})
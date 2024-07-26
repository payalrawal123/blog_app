const { access } = require("../middleware/access");
const { auth } = require("../middleware/authMiddleWare");
const postModels = require("../models/postModels");
const express = require("express");

const postRouter = express.Router();

postRouter.post("/",auth,access("author,reader"),async(req,res) =>{
    try {
        const createPost = new postModels(req.body);
    await createPost.save();
    return res.status(200).json({ error: false, item: createPost });
    } catch (error) {
        return res.status(400).json({ error: true, message: error.message });
      }
})
postRouter.get("/",async (req, res) => {
    try {
      const getTsk = await postModels.find();
      return res.status(200).json({ error: true, item: getTsk });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  });
postRouter.patch("/:id", auth, access("author"), async (req, res) => {
    const { id } = req.params;
    try {
      const updateTask = await postModels.findByIdAndUpdate({ _id: id }, req.body);
  
      return res.status(200).json({ error: false, item: updateTask });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  });
  
  postRouter.delete("/:id", auth, access("author"), async (req, res) => {
    const { id } = req.params;
    try {
      const deleteTask = await postModels.findByIdAndDelete({ _id: id });
  
      return res.status(200).json({ error: false, item: deleteTask });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  });
module.exports = {
    postRouter
}
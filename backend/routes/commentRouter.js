const express = require("express");

const commentRouter = express.Router();

commentRouter.post("/",auth,access("author,reader"), async(req,res)=>{
    try {
        const createPost = new postModels(req.body);
    await createPost.save();
    return res.status(200).json({ error: false, item: createPost });
    } catch (error) {
        return res.status(400).json({ error: true, message: error.message });
      }
})
commentRouter.get("/",async(req,res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ post: postId }).populate('author', 'username');
        res.json(comments);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
})
commentRouter.patch("/",auth,access("author"),async(req,res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (comment) {
          comment.approved = true;
          await comment.save();
          res.json({ message: 'Comment approved' });
        } else {
          res.status(404).json({ message: 'Comment not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
})
commentRouter.delete("/",auth,access("author"),async(req,res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (comment) {
          await comment.remove();
          res.json({ message: 'Comment deleted' });
        } else {
          res.status(404).json({ message: 'Comment not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
})
module.exports = {
    commentRouter
}

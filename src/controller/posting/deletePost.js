const Posting = require("../../models/posting");

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    await Posting.findByIdAndDelete(postId);

    res.status(200).json({
      message: "Post deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deletePost;

const Posting = require("../../models/posting");

const getAPost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Posting.findById(postId);

    const postItem = {
      id: post._id,
      postCategory: post.postCategory,
      title: post.title,
      description: post.description,
      images: post.images,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };

    return res.status(200).json(postItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getAPost;

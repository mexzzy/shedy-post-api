const Posting = require("../../models/posting");

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  const { postCategory, title, description, images } = req.body;

  try {
    const post = await Posting.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (postCategory) {
      post.postCategory = postCategory;
    }

    if (title) {
      post.title = title;
    }

    if (description) {
      post.description = description;
    }

    if (images) {
      post.images = images;
    }

    await post.save();

    return res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updatePost;

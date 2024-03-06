const Posting = require("../../models/posting");

const addImage = async (req, res) => {
  const postId = req.params.postId;
  const { image } = req.body;

  try {
    if (!image) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const post = await Posting.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.images = post.images || [];

    post.images.push(image);

    await post.save();

    return res.status(200).json({ message: "Image added successfully", post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = addImage;

const Posting = require("../../models/posting");

const createPost = async (req, res) => {
  const { postCategory, title, description, images } = req.body;

  try {
    if (!postCategory || !title || !description || !images) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Posting({
      postCategory,
      title,
      description,
      images,
    });

    await newPost.save();

    return res.status(201).json({ id: newPost._id, message: "Post created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createPost;

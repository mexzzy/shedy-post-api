const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    postCategory: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Posting = mongoose.model("Posts", PostSchema);
module.exports = Posting;

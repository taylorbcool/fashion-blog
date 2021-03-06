// PostSchema.js
const mg = require("mongoose");
const Schema = mg.Schema;
const { userSchema } = require("../users/UserSchema");
const { commentSchema } = require("../comments/CommentSchema");

var postSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  img_url: String,
  body: String,
  items: [{ item: String, brand: String, price: Number }],
});

var Post = mg.model("Post", postSchema);

module.exports = { Post };

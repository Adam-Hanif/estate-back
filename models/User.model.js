const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  estate: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Estate",
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Estate",
    },
  ],
});
const User = mongoose.model("User", userShema);
module.exports = User;

const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    descreption: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true  , ref : "User"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);

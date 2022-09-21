const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cards",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);

module.exports = List;

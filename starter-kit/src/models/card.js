const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    etiquettes: {
      type: String,
      required: true,
    },
    checklist: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;

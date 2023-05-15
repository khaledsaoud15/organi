const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productsSchema);

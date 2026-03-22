const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
    },
    description: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    address: String,
  },
  { timestamps: true },
);

const TheatreModel = mongoose.model("Theatre", theatreSchema);

module.exports = TheatreModel;

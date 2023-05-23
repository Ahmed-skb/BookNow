const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  Owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  ExtraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuest: Number,
});

const PlaceModel = mongoose.model("Place", PlaceSchema);

module.exports = PlaceModel;

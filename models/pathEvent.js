const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const pathEventSchema = new Schema({
  path_id: { type: String, required: true },
  timestamp: { type: Number, required: true },
  has_error: { type: Boolean, required: true },
});

module.exports = mongoose.model("path_event", pathEventSchema);

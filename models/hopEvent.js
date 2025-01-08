const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const hopEventSchema = new Schema({
  hop_id: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  duration: { type: Number, required: true },
  has_error: { type: Boolean, required: true },
});

module.exports = mongoose.model("hop_event", hopEventSchema);

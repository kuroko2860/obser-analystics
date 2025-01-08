const mongoose = require("mongoose");

const requestLogEventSchema = new mongoose.Schema({
  timestamp: { type: Number, required: true },
  service_name: { type: String, required: true },
  endpoint: { type: String, required: true },
  method: { type: String, required: true },
  status_code: { type: Number, required: true },
  duration: { type: String, required: true },
  request_size: { type: Number, required: true },
  response_size: { type: Number, required: true },
  user_id: { type: String, required: true },
  user_agent: { type: String, required: true },
});

module.exports = mongoose.model("request_log_event", requestLogEventSchema);

const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  service_name: { type: String, required: true },
  operation_name: { type: String, required: true },
});

module.exports = mongoose.model("operation", operationSchema);

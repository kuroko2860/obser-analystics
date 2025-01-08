const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hopSchema = new Schema({
  id: Number,
  called_service_name: String,
  called_operation_name: String,
  caller_service_name: String,
  caller_operation_name: String,
});

module.exports = mongoose.model("hop", hopSchema);

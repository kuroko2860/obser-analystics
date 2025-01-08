const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TreeHop = new Schema({
  operation_name: { type: String, required: true },
  service_name: { type: Number, required: true },
  children: { type: [TreeHop], required: true },
});

const pathSchema = new Schema({
  id: { type: String, required: true },
  tree_hop: { type: TreeHop, required: true },
});

module.exports = mongoose.model("path", pathSchema);

const Operation = require("../models/operation");

exports.getAllServices = async () => {
  await Operation.find({}).then((operations) => {
    return operations;
  });
};

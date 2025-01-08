const Service = require("../services/index");

exports.getAllServices = async (req, res) => {
  const services = await Service.getAllServices();
  res.json(services);
};

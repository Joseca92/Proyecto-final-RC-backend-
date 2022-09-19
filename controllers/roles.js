const { request, resolve } = require("express");
const Rol = require("../models/role");

const rolesGet = async (req = request, res) => {

  const roles = await Rol.find();
  res.json({
    roles,
  });
};

module.exports = {
    rolesGet,
   
  };
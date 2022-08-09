const { request, resolve } = require("express");
const Menu = require("../models/menu");

const menuGet = async (req = request, res) => {
  const { limite = 5, desde = 0 } = req.query;
  const menu = await Menu.find({ estado: true })
    .skip(desde)
    .limit(limite);
  const total = await Menu.countDocuments({ estado: true });
  res.json({
    total,
    menu,
  });
};
const menuPost = async (req = request, res = resolve) => {
  
  const { nombre, estado, precio, detalle, categoria } = req.body;
  const menu = new Menu({ nombre, estado, precio, detalle, categoria });
  await menu.save();
  res.status(201).json({
    // msg: 'Peticion POST',
    menu,
  });
};
const menuPut = async (req = request, res) => {
  const { id } = req.params;
  const {nombre, estado, precio, detalle, categoria,...datosMenu} = req.body
  const menu = await Menu.findByIdAndUpdate(id,datosMenu,{new:true})

  res.json({
    msg: "Menú actualizado",
    menu,
  });
};
const menuDelete = async (req = request, res) => {
  const { id } = req.params;
  const menuEliminado = await Menu.findByIdAndDelete(id)
  res.json({
    msg: "Menú eliminado",
    menu,
  });
};
module.exports = {
  menuGet,
  menuPost,
  menuPut,
  menuDelete,
};

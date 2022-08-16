const { request, resolve } = require("express");
const Menu = require("../models/menu");

const menuGet = async (req = request, res) => {
  const { limite = 5, desde = 0 } = req.query;
  const menu = await Menu.find({ estado: true }).skip(desde).limit(limite);
  const total = await Menu.countDocuments({ estado: true });
  res.json({
    total,
    menu,
  });
};

const menuByIdGet=async(req= request, res= response)=>{
  const {id}= req.params;
  const menu= await Menu.findById(id);
  if (menu.estado == false){
      return res.status(400).json({
          msg: "No se encuentra el menu"
      })
  }
  return res.json({
      menu,
  })
}

const menuPost = async (req = request, res = resolve) => {
  const { nombre, estado, precio, detalle, categoria } = req.body;
  const menu = new Menu({ nombre, estado, precio, detalle, categoria });
  await menu.save();
  res.status(201).json({
    // msg: 'Peticion POST',
    menu,
  });
};
const menuPut = async (req, res) => {
  const {id} = req.params;
  const {_id, ...datosMenu } = req.body;
  const menu = await Menu.findByIdAndUpdate(id, datosMenu, { new: true });

  res.json({
    msg: "Menú actualizado",
    menu,
  });
};
const menuDelete = async (req = request, res = resolve) => {
  const { id } = req.params;
  //inhabilitar Menu
  const query={estado:false};
  const menuBorrado= await Menu.findByIdAndUpdate(id, query,{new:true});
  res.json({
  msg:'Menu inhabilitado de la base de datos',
  menuBorrado,
  });
};
module.exports = {
  menuGet,
  menuByIdGet,
  menuPost,
  menuPut,
  menuDelete,
};

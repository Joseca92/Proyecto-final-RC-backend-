const { request, resolve } = require("express");
const Categoria = require("../models/categoria");

const categoriaGet = async (req = request, res) => {

  const categoria = await Categoria.find({ estado: true });
  res.json({
    
    categoria,
  });
};

module.exports = {
    categoriaGet,
   
  };
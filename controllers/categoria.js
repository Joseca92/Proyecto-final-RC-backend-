const { request, resolve } = require("express");
const CAtegoria = require("../models/categoria");

const categoriaGet = async (req = request, res) => {

  const categoria = await Categoria.find({ estado: true }).skip(desde).limit(limite);
  res.json({
    
    categoria,
  });
};
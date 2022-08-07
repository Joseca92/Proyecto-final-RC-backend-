const {request, resolve} = require("express");
const MenuSchema = require ("../models/menu")

const menuGet = async (req = request, res)=>{
    const query = req.query //obtenemos la informacion
    res.json({
        msg: 'Peticion GET'
    })
}
const menuPost = async (req = request, res)=>{
    const body = req.body;
    const menu = new MenuSchema(body);
    await menu.save();
    res.status(201).json({
        // msg: 'Peticion POST',
        menu,
    })

}
const menuPut = async (req = request, res)=>{
    const {id}= req.params
    res.json({
        msg: 'Peticion PUT',
        menuId:id,
    })

}
const menuDelete = async (req = request, res)=>{
    const {id} = req.params
    res.json({
        msg: 'Peticion DELETE',
        menuId: id,
    })

}
module.exports = {
    menuGet,
    menuPost,
    menuPut,
    menuDelete,
}
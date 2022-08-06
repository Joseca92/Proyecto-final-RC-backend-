const {request, resolve} = require("express");
const MenuSchema = require ("../models/menu")

const menuGet = async (req = request, res)=>{
    const query = req.query //obtenemos la informacion
    res.json({
        msg: 'Peticion GET'
    })
}
const menuPost = async (req = request, res)=>{
    const body = req.body
    res.json({
        msg: 'Peticion POST',
        usuario : body,
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
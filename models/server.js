const express = require("express");
const cors = require("cors");
const {dbConnection} = require('../database/config');

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';
        this.authPath= '/api/auth';
        this.menuPath= '/api/menu';
        this.pedidoPath= '/api/pedido';
        this.buscarBlogPath='/api/buscarm'
        this.categoriaPath='/api/categoria'
        this.buscarPedidoPath='/api/buscarp'
        this.rolesPath='/api/roles'
        this.buscarUsuarioPath='/api/buscaru'
        

        //conexion DB
        this.conectarDB();
        //middlewares
        this.middlewares();
        //routes
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
      }
    
    middlewares(){
        //Lectura de body
        this.app.use(express.json());

        // CORS
        this.app.use(cors());

        //carpeta publica
        this.app.use(express.static("public")); 
    }
    routes(){
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
        this.app.use(this.authPath, require("../routes/auth"));
        this.app.use(this.menuPath, require("../routes/menu"));
        this.app.use(this.pedidoPath, require("../routes/pedido"));
        this.app.use(this.buscarBlogPath, require("../routes/menu-buscar"));
        this.app.use(this.categoriaPath, require("../routes/categoria"));
        this.app.use(this.rolesPath, require("../routes/roles"));
        this.app.use(this.buscarPedidoPath, require("../routes/pedido-buscar"));
        this.app.use(this.buscarUsuarioPath, require("../routes/usuario-buscar"));



    }



    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server online port: ", this.port);
        });
    }
   
}
module.exports = Server;
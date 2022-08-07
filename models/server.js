const express = require("express");
const cors = require("cors");
const {dbConnection} = require('../database/config');

class Server{
    constructor() {
        this.app = express();
<<<<<<< HEAD
<<<<<<< HEAD
        this.port = process.env.port
        this.menuPath= '/menu'
        this.conectarDB();
        this.middleware();
        this.routes()
    }
    middleware(){
        this.app.use(express.json)
        
=======
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';
        this.authPath= '/api/auth';
        this.menuPath= '/api/menu'
=======
        this.port = process.env.PORT;
        this.usuariosPath='/api/usuarios';
        this.authPath= '/api/auth';
        this.menuPath= '/api/menu';
>>>>>>> c04db59a8d338a34b801169af56c4a2bca5b54da
        //conexion DB
        this.conectarDB();
        //middlewares
        this.middlewares();
        //routes
        this.routes();
<<<<<<< HEAD
>>>>>>> b1929c131588c244c5655407278b831bdfca1fc2
=======

>>>>>>> c04db59a8d338a34b801169af56c4a2bca5b54da
    }

    async conectarDB() {
        await dbConnection();
      }
    
    middlewares(){
        //Lectura de body
        this.app.use(express.json());

        //CORS
        this.app.use(cors());

        //carpeta publica
        this.app.use(express.static("public")); 
    }
    routes(){
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
        this.app.use(this.authPath, require("../routes/auth"));

    }



    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server online port: ", this.port);
        });
    }
    routes(){
        this.app.use(this.menuPath, require('../routes/menu'))
    }

}
module.exports = Server;
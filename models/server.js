const express = require("express");
const { dbConnection } = require("../database/config");

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.port
        this.menuPath= '/menu'
        this.conectarDB();
        this.middleware();
        this.routes()
    }
    middleware(){
        this.app.use(express.json)
        
    }

    async conectarDB() {
        await dbConnection();
      }
        listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server Online", this.port)
        });
    }
    routes(){
        this.app.use(this.menuPath, require('../routes/menu'))
    }

}
module.exports = Server;
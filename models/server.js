const express = require("express");
const { dbConnection } = require("../database/config");

class Server{
    constructor() {
        
        this.app = express();
        this.port = process.env.port
        this.conectarDB();
    }

    async conectarDB() {
        await dbConnection();
      }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server Online", this.port)
        });
    }

}
module.exports = Server;
const express = require("express");


class Server{
    constructor() {
        this.app = express();
        this.port = process.env.port
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server Online", this.port)
        });
    }

}
module.exports = Server;
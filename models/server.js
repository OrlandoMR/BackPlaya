const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        this.connectDB();
        this.middlewares();
        this.routes();


    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //Uso de CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/users', require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port);
    }

}

module.exports = Server;
const express = require("express");
const dbConnection = require("../database/config")
const PORT = require("../config.js")
const { getEmployee } = require("../controllers/employeeController")


class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.pathEmployee = "/api/employee";
        this.route();
        this.dbConnection();
    }
    async dbConnection() {
        await dbConnection();
    }
    route() {

    }
    listen() {
        this.app.listen(PORT, () => {
            console.log(`Server is runnig in port: ${PORT}`);

        })
    }


}

module.exports = Server;
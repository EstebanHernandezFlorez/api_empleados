const mongoose = require("mongoose");

const dbConnection = async () => {
        await mongoose.connect("mongodb://localhost:27017/company").then(()=>console.log("Base de datos online")).catch((error)=>console.log(error));
}

module.exports = dbConnection;   
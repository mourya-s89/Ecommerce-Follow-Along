const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://mouryakadali:mourya1801>@cluster0.wkkp3.mongodb.net/")
    }catch(error){
        console.log("Mongo db error",error);
    }
}

module.exports = connect;
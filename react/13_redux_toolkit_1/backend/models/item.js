//const mongoose = require("mongoose");
import mongoose from 'mongoose';
//importit ja exportit piti kirjoittaa eri tavalla

let Schema = mongoose.Schema({
    type:String,
    count:Number,
    price:Number
})

//module.exports = mongoose.model("Item",Schema);

export default mongoose.model("Item",Schema);


const express = require("express");
const mongoose = require("mongoose");
const shoppingRoute = require('./routes/shoppingroute');

let app = express();

app.use(express.json());

//Windows evnvironment variables on tallennettu etukäteen
const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+
"/shopping?retryWrites=true&w=majority&appName=TestiKlusteri";
//Lisättiin shopping tuohon ?retryWrites eteen. (Opella siinä okksshopping)
//Eli databaseen tulee shopping niminen namespace

console.log(url);

mongoose.connect(url).then(
	() => console.log("Connected to MongoDB"),
	(err) => console.log("Failed to connect to MongoDB. Reason ",err)
)

app.use("/api",shoppingRoute);

app.listen(3000);

console.log("Running in port 3000");

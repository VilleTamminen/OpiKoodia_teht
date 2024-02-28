const express = require("express");

let router = express.Router();

//DATABASE

let database = [];
let id = 100;

/* DATA MODEL
{
	"type":string,
	"count":number,
	"price":number,
	"id":number
}
*/

/* REST API
	GET - /shopping Hae kaikki ostokset
	POST - /shopping Lisää uusi ostos
	DELETE - /shopping/:id Poista :id:llä varustettu ostos
	PUT - /shopping/:id Muokkaa :id:llä varustettu ostosta. kaksoispiste tarkoittaa muuttujaa
*/

router.get("/shopping",function(req,res){
    const tempDatabase = database.filter(item => item.user === req.session.user);
	return res.status(200).json(tempDatabase);
})

router.post("/shopping",function(req,res){
	let item = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"id":id,
        "user":req.session.user
	}
	id++;
	database.push(item);
	return res.status(201).json(item);
})

router.delete("/shopping/:id",function(req,res){
	let tempId = parseInt(req.params.id, 10); //convert string to integer
	for(let i=0;i<database.length;i++){
        //etsi oikea item id ja user
        if(database[i].id === tempId && req.session.user === database[i].user){
            database.splice(i,1);
            return res.status(200).json({"Message":"Success"});
        }
    }
    return res.status(404).json({"Message":"Not found"});
})

router.put("/shopping/:id",function(req,res){
	let tempId = parseInt(req.params.id, 10); //convert string to integer
	let item = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"id":tempId,
        "user":req.session.user
	}
	for(let i=0; i<database.length; i++){
		if(item.id === database[i].id && req.session.user === database[i].user){
			database.splice(i,1,item); //removes elements from array and insert new to replace them
			return res.status(200).json({"Message":"Success"});
		}
	}
	return res.status(404).json({"Message":"Not found"});
})


module.exports = router;

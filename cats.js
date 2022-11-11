var mongoose = require("mongoose");
var RyansVar=[];
//run mongo server with "mongod" in another terminal
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser:true} ); // cat_app name of DB, will make and connect or use if already exist


// adds structure to the data we will add to the data base. Doesn't actually affect the DB
// tells Mongoose that I want to add a piece of data with this particular pattern
// adds predictable structure
var petSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});


// creates an object called Cat that follows the catSchema
// Cat is the singular, in the parenthesis. Mongoose has built in code to make into plural
var Cat = mongoose.model("Cat", petSchema); 
var Dog = mongoose.model("Dog", petSchema);

//creates a Cat object called newCat to be saved to the DB
/*
var newCat = new Cat ({
	name: "Scooby",
	age: "7",
	temperament: "mean"
})

//saves the newCat to the DB, but checks for errors first

newCat.save(function(err, item){
	if(err){
		console.log("something went wrong");
	}
	else{
		console.log("you saved a cat")
		console.log(item);
	}
})

// equivalent to lines 23-39
Cat.create({
	name:"schevin",
	age:"123",
	temperament:"also mean"
}, function(err, cat){
	if(err){
		console.log("u got an error");
	}
});
*/

Dog.create({
	name:"chewy",
	age:"10",
	temperament:"lazy"
},(err, item)=>{
	if(err){
		console.log("u got an error");
	}
});

//retrieve all the cats from the DB
//equivalent to db.Cat.find() 

Dog.find({}, function(err, items){
	if(err){
		console.log("you got an error");
		console.log(err);
	}
	else{
		console.log(items);
	}
});




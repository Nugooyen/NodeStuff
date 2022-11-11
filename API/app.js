//includes necessary libraries and frameworks
var request = require('request')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var b = 3;

//not sure what this means but i know i need it to make it work
app.use(bodyParser.urlencoded({extended:true}));
//sets up the server to listen on port 3000
app.listen(3000, () => {
	console.log("youre connected ");
});


//create a root directory
app.get("/", function(req,res){
	res.render("home.ejs");
});

app.post("/posturl", function(req,res){
	
	var searchTerm = req.body.searchterm;
	console.log(searchTerm);
	request("http://omdbapi.com/?s="+searchTerm+"&apikey=thewdb", function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body); // turns the string into usable json 
			res.render("results.ejs", {data:data});
		}
	})
})

console.log('hello2');



// add this to the end of the url
// &apikey=thewdb
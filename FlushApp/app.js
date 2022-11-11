const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  multer =require('multer');

var postSchema = new mongoose.Schema({
	name: String,
	image: String,
	body : String,
	created: {type: Date, default: Date.now}
});

var ToiletPost = mongoose.model('toilet', postSchema);

//express start server on port 3000
var port = 3000;
app.listen(port, function(){
	console.log("you're connected");
});

app.use(bodyParser.urlencoded({extended: true}));

//connect mongoose
mongoose.connect("mongodb://localhost:27017/FlushApp", {useNewUrlParser:true} );
app.use(express.static('public'));
app.get("/", function(req,res){
	res.render('home.ejs');
});

app.get("/toilets", function(req,res){
	ToiletPost.find({}, function(err, item){
		if(err){
			console.log(err);
			res.send("oops there was an error retrieving the toilets");
		} else {
			res.render("index.ejs",{toilets:item});
		}
	});
});

app.get("/toilets/new", function(req,res){
	res.render('new.ejs');
});

app.post('/toilets/create', function(req,res){
	var formObj = {name:req.body.toiletName , image: req.body.toiletImg, body:req.body.toiletBody}
	ToiletPost.create(formObj,function(err,item){
		if(err){
			console.log(err);
			res.render("oops, something went wrong posting");
		} else {
			console.log(item);
			console.log(req);
			res.redirect('/toilets');
		}
	});
});

app.get('/toilets/:id', function(req,res){
	var postID = req.params.id;
	ToiletPost.findById(postID, function(err,toilet){
		if (err){
			console.log(err);
		} else{
			res.render('show.ejs' ,{toilet:toilet} );
		}
	})
});

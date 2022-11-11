const express = require('express');
const app = express();


const port = 80;

var lon = 33.826672;
var lat =-117.949011;

function DD2DMS(val){
	var degree = Math.floor(val);
	var minute = 60*(val%1);
	var second = 60*(minute%1);
		minute = Math.floor(minute);
		second = second.toFixed(1);
	return(degree + "%C2%B0" + minute + "'" + second + "%22");
}

app.listen(port,()=>{
	console.log("connected");
});

//Test Location: 33.826672,-117.949011

app.use(express.static('public'));

app.post("/",(req,res)=>{
	console.log('someones here');
	res.redirect("/");
});

app.get("/",(req,res)=>{
	var e = "E";
	var n = "N"
	if(lon <0){
		n = "S";
		lon=lon*(-1);
	}
	lon = DD2DMS(lon);
	if(lat < 0){
		e = "W";
		lat = lat*(-1);
	}
	lat = DD2DMS(lat);
	res.render('home.ejs', {lon:lon,lat:lat,e:e,n:n});
});



app.get("/maps/",(req,res)=>{
	lon = req.query.lon;
	lat = req.query.lat;
	console.log("longitude: " + lon + " latitiude: " + lat);
	res.send('recieved');
});
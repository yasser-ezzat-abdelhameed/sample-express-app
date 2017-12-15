const express = require('express');
const path = require('path');
const app = express();

app.get('*', function(req,res){
	res.sendFile(__dirname + '/static/index.html');
});

const port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log("Server is running");
});
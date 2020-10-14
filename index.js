//express
var express = require('express');

//fetch
var fetch = require('node-fetch');

//call express
var app = express();

///port inforamtion 
const port = process.env.PORT || 3000;


//use EJS for templates 
app.set('view engine', 'ejs');
//make styles publiv
app.use(express.static("public"));


//get home page / 
app.get('/', function(req, res){
    res.render('index');
});

//server setup 
app.listen(port, function(){
    console.log('Listening on ' + port)
});
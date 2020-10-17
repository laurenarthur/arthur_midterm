//express
var express = require('express');

//fetch
var fetch = require('node-fetch');

//body-parser
var bodyParser = require("body-parser");

//call express
var app = express();

///port inforamtion 
const port = process.env.PORT || 3000;


//use EJS for templates 
app.set('view engine', 'ejs');
//make styles publiv
app.use(express.static("public"));
//tell app to use Body parser
app.use(bodyParser.urlencoded({extended: true}));

//get home page / 
app.get('/', function(req, res){
    //let comicData;
    fetch('http://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('index',{data:data});
    });
    console.log("got it");
    //res.render('index');
});


//fetch comic of the day 
//app.get('/comic', function(req, res){
    //fetch('http://xkcd.com/info.0.json')
   // .then(res => res.json())
   // .then(data => {
     //   res.render('comic',{data:data});
   // });
//})

//fetch random comic
app.get('/random', function(req, res){
    let randNumber=Math.floor((Math.random() * 2373) + 1);
    fetch('https://xkcd.com/'+randNumber+'/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('random', {data:data});
    });
})

//server setup 
app.listen(port, function(){
    console.log('Listening on ' + port)
});

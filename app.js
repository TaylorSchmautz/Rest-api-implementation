/*
Taylor Schmautz, March 20th 2017.
Headers
Name=Content-Type
Value=application/json
*/

//dependencies
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

People = require('./models/people');

//Connect to DB
mongoose.connect('mongodb://localhost/people_info');
var db = mongoose.connection;

//home page
app.get('/',function(req, res){
    res.send('Hello, you can use get and post api calls.\n Use /api/people for the calls.');
});

//get 
app.get('/api/people', function(req,res){
    People.getPeople(function(err, people){
        console.log("Get called");
        if(err){
            throw err;
        }
        res.json(people);
    });
});

//post
app.post('/api/people',function(req, res){
    var people = req.body;
    var count = Object.keys(people).length;
    if(((people['firstname']==null)||(people['lastname']==null)||(people['phone']==null)) || (count!=3)){
         console.log("Invalid Post");
         res.statusCode = ("400");
         res.send('"error": "Invalid payload. Not a person"');
    }
    else{
        console.log("Valid Post");
        People.addPeople(people, function(err, people){
            if(err){
                throw err;
            }
            res.statusCode = ("201");
            res.json(people);
        });
    }
});

var port = 9000;
app.listen(port);
console.log('running on port 80');
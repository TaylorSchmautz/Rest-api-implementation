var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

People = require('./models/people');

//Connect to DB
mongoose.connect('mongodb://localhost/people_info');
var db = mongoose.connection;

app.get('/',function(req, res){
    res.send('Please use /api/...');
});

app.get('/api/getpeople', function(req,res){
    People.getPeople(function(err, people){
        if(err){
            throw err;
        }
        res.json(people);
    });
});

app.post('/api/people',function(req, res){
    var people = req.body;
    var count = Object.keys(people).length;
    //console.log(count);
    if(((people['firstname']==null)||(people['lastname']==null)||(people['phone']==null)) || (count!=3)){
         console.log("Invalid Post");
         res.statusCode = ("400");
         res.send('"error": "Invalid payload. Not a person"');
    }
    else{
       // var count = Object.keys(people).length;
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

app.listen(3500);
console.log('running on port 3500');
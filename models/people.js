var mongoose = require('mongoose');


var peopleSchema = mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }

});

var People = module.exports = mongoose.model('People', peopleSchema);

//get people
module.exports.getPeople = function(callback, limit){
      People.find(callback);
}

//post people
module.exports.addPeople = function(people, callback){
    People.create(people, callback);
}
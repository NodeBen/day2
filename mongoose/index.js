const mongoose = require('mongoose');

mongoose.connection.on('connected', function() {
    console.log('Mongosse default connection op en to db');
})

mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err)
});

mongoose.connect('mongodb://localhost:27017/database', { useNewUrlParser: true });


var schema = new mongoose.Schema({name: 'string', size: 'string'});

var Tank = mongoose.model('Tank', schema);

/*
var t = new Tank({name: 'tank name', size: 'huge'});
t.save((err,doc) => {
    console.log(err);
    console.log(doc);
});
*/
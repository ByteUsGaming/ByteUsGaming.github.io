var fs = require("fs");
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
mongoose.connect('mongodb://carl:byteuscarl@ds035683.mongolab.com:35683/byetusgaming');

var feedbackSchema = new Schema({
    name: String,
    feedback: String
});

var Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;

app.post('/feedback', function(req, res) {
    Feedback.create({
        name: req.body.name,
        feedback: req.body.feedback
    }, function(err) {
        if(err)
            res.send(err);
        else {
            console.log('Feedback successfully added.');
        }
    });
});


app.get('*', function(req, res) {
    res.send('index.html');
});

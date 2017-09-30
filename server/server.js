// external libraries
var express = require('express');
var bodyParser = require('body-parser');
// local libraries
var {mongoose} = require('./db/mongoose'); 
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//set up app variable
var app = express();

//configure middleware-->bodyParser.json will work as our middleware for this app.
// allows us to send JSON to our express application.
app.use(bodyParser.json());

//set up route
app.post('/todos', (req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
    // console.log(req.body);
});


// sets the port the app will connect with
app.listen(3000, ()=>{
    console.log('App started on port 3000.');
});



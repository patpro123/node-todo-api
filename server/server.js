var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/dbconnection');
var {todomodel} = require('./models/todo');
var {usermodel} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    var toDo = new todomodel({
        text: req.body.text
    });
    toDo.save().then((doc) => {
        res.send(doc);
    },(err) => {
        console.log("Error while saving",err);
        res.status(400).send(err);
    });

})


app.listen(3000,() => {
    console.log('Listening on a port');
});


// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// var newTodo = new todomodel({
//     text: "  Sample To do with spaces  "
// })

// newTodo.save().then((result) => {
//     console.log(JSON.stringify(result,undefined,2));
// },(err) => {
//     console.log("Error while saving = ",err);
// });

// var impTodo = new todomodel({
//     text:"    Something else       "
    
// });

// impTodo.save().then((result) =>{
//     console.log(JSON.stringify(result,undefined,2));
// },(err) => {
//     console.log("Error while saving ",err);
// });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connection is succesful')
// });
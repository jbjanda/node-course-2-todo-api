// const MongoClient = require('mongodb').MongoClient; // can use destructuring here to handle MongoClient call
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();// this allows us to create object ids wherever we like :) can use this to create unique identifiers
// console.log(obj);
// this destructures the MongoClient from the mongodb object :)S
//Object Destructuring example
// var user = {name: 'jeff'};
// var {name}= user;

// console.log(name); // will print jeff since this is the name of the user object assigned above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unable to connect to the database');
    }
    console.log('connection connect.js to mongodb');

// db.collection('Todos').insertOne({
//     text: 'Do Something',
//     completed: false
// },
// (err, res)=>{
//     if(err){
//         return console.log('unable to insert todo record');
//     }

//     console.log(JSON.stringify(res.ops, undefined, 2));

// });
// db.collection('Users').insertOne({
//     name: 'Jeff',
//     age: 46,
//     location:'Jax'
// },(err, res)=>{
//     if(err)
//         return console.log('Unable to insert user record', err);
//     console.log(JSON.stringify(res.ops, undefined, 2));
//     console.log(res.ops[0]._id.getTimestamp());
    
// });

    db.close();

    
});
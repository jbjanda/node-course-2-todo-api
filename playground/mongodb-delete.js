// const MongoClient = require('mongodb').MongoClient; // can use destructuring here to handle MongoClient call
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unable to connect to the database');
    }
    console.log('connection to mongodb');

// db.collection('Todos').find({_id: new ObjectID('59af36fb845c124bba6dd40b')}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined,2));
// }, (err)=>{
//     console.log('unable to find data in todos', err);
// });

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Number ofTodos ${count}`);
// }, (err)=>{
//     console.log('unable to find data in todos', err);
// });

// db.collection('Users').find({name: 'Mike'}).toArray().then((docs)=>{
//     // console.log(`Number of Users ${count}`);
//     console.log(JSON.stringify(docs,undefined,2));
// }, (err)=>{
//     console.log('unable to find data in todos', err);
// });

// deleteMany
// db.collection('Todos').deleteMany({text:'walk dog'}).then((result)=>{
//     console.log(result);
// });
// deleteOne
// db.collection('Todos').deleteOne({text: 'walk dog'}).then((result)=>{
//     console.log(result);
// });
// // findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
// });

/* users challenge below*/

// db.collection('Users').deleteMany({name:'James'}).then((result)=>{
//     console.log(`${result.deletedCount} records deleted`);
// });

db.collection('Users').find({name:'Ken'}).toArray().then((doc)=>{
    id=doc[0]._id;
    db.collection('Users').deleteOne({_id: id}).then((result)=>{
        console.log(result);
    });
});

    // db.close();

    
});
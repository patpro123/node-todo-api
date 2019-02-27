const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Failed to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    // var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to add an entry to the collection',err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    var db = client.db('UserDb');
    db.collection('Users').insertOne({
        name: 'Partho',
        age: 25

    },(err,result) => {
        if(err){
            return console.log
        }
        console.log(JSON.stringify(result,undefined,2));
    });
    client.close();
 
});



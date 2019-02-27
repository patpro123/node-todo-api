const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Failed to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('UserDb');
    db.collection('Users').find({
        age: <20
    }).toArray().then((docs) => {
        console.log("To dos");
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log("Failure to find any document",err);
    });


    client.close();
 
});



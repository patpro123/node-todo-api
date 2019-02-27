const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Failed to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('UserDb');
    db.collection('Users').deleteOne({
        age: 25
    }).then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log("Failure to delete any document",err);
    });


    client.close();
 
});



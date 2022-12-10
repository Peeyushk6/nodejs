//CRUD create read update delete
//Older version of mongodb

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const{MongoClient,ObjectID} = require('mongodb') 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp)

MongoClient.connect(connectionURL,{ useNewUrlParser:true},(error,client)=>{
    if(error){
        console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertMany([{
    //     name:'Peeyush',
    //     age:24
    // },{
    //     name:"subham",
    //     age:"27"
    // }]
    // ,(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result);
    // })

//     db.collection('tasks').insertMany([
//         {
//             description:'Clean the house',
//             completed:true
//         },{
//             description:'Renew inspection',
//             completed:false
//         },{
//             description:'Pot plants',
//             completed:false
//         }
//     ],(error,result)=>{
//         if(error){
//             return console.log('Unable to insert tasks!')
//         }
//         console.log(result.ops);
//     })

});

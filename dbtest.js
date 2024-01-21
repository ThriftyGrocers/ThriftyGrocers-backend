// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://thriftyBoys:VmlpPJlKBtXRG1lR@cluster0.mongodb.net/ThriftyGrocers?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// }); 

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://thriftyBoys:VmlpPJlKBtXRG1lR@thriftygrocers.0n0bipv.mongodb.net/"
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('test');
    const collection = db.collection('devices');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);
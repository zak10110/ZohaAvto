
const express=require ('express');
const app= express();
var Car = new Object();



const { MongoClient } = require("mongodb");


// Connection URI
const uri ="mongodb+srv://MoePochtenie:PuBespD0SBUf6Gyj@cluster0.djnqf.mongodb.net/test";

// Create a new MongoClient

const client = new MongoClient(uri);


async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("MoePochtenie").command({ ping: 1 });
    const database = client.db("ZohaAuto");
    const product = database.collection("Product");
    // // create a document to insert
    // const doc = {
    //     Brand: "Das Auto3",Model:"Your Mam", Mileage: "120000",
    //     Colour:"Red",Price:"4000",EngineVolume:"2.5",TypeOfDrive:"four-wheel drive",
    //     GearboxType:"Manual Transmission",YearOfIssue:"2018",FuelType:"Petrol",LinkToPicture:"https://static.wikia.nocookie.net/my-summer-car/images/4/4a/%D0%93%D0%B8%D1%84%D1%83.jpg/revision/latest/scale-to-width-down/1200?cb=20201127173623&path-prefix=ru"
    // }
    // const result = await product.insertOne(doc);
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);
    const cursor = product.find({});
    await cursor.forEach(doc => Car={doc});
    console.log(Car);
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send(Car);
});

app.listen(3000,()=>{console.log("Gavno rabotaet")});


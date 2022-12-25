
const express=require ('express');
const app= express();
const CarModel = require('./models/CarModel');
const { CarRouter } = require('./routes/CarRout');
const mongoose = require('mongoose');


// Connection URI
const uri ="mongodb+srv://MoePochtenie:PuBespD0SBUf6Gyj@cluster0.djnqf.mongodb.net/test";

// Create a new MongoClient



async function run() {
  CarRouter(app);
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    })
    mongoose.set('strictQuery', true);
    app.listen(3001, () => {
        console.log(`Server is working now on port ${3001}`);
    });
}
catch (e) {
    console.log(e.message);
}
}

run();


app.get('/getcars',async (req, res) => {
  const cursor = await CarModel.find({}).lean();
  // res.send(cursor);
  res.json({cursor:cursor})
});



app.get('/', (req, res) => {
    res.send(Car);
});




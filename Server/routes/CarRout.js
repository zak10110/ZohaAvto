const CarModel = require("../models/CarModel");
async function CarRouter(app){
app.post('/api/addcar',async(req,res)=>{
    console.log("NU i Gavno");
    
    const {
        Brand,
        Model,
        Mileage,
        Colour,
        Price,
        EngineVolume,
        TypeOfDrive,
        GearboxType,
        YearOfIssue,
        FuelType,
        LinkToPicture,
    } = req.body;
      console.log(Brand);

    const car=new CarModel({
        Brand:Brand,
        Model:Model,
        Mileage:Mileage,
        Colour:Colour,
        Price:Price,
        EngineVolume:EngineVolume,
        TypeOfDrive:TypeOfDrive,
        GearboxType:GearboxType,
        YearOfIssue:YearOfIssue,
        FuelType:FuelType,
        LinkToPicture:LinkToPicture,

    })
    await car.save();
})  
}
module.exports={CarRouter};


const CarModel = require("../models/CarModel");


async function CarRouter(app){
app.post('/api/addcar',async(req,res)=>{
    let Brand=req.body.Brand;
    let Model=req.body.Model;
    let Mileage=req.body.Mileage;
    let Colour=req.body.Colour;
    let Price=req.body.Price;
    let EngineVolume=req.body.EngineVolume;
    let TypeOfDrive=req.body.TypeOfDrive;
    let GearboxType=req.body.GearboxType;
    let YearOfIssue=req.body.YearOfIssue;
    let FuelType=req.body.FuelType;
    let LinkToPicture=req.body.LinkToPicture;

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
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















    // let Brand=req.body.Brand;
    // let Model=req.body.Model;
    // let Mileage=req.body.Mileage;
    // let Colour=req.body.Colour;
    // let Price=req.body.Price;
    // let EngineVolume=req.body.EngineVolume;
    // let TypeOfDrive=req.body.TypeOfDrive;
    // let GearboxType=req.body.GearboxType;
    // let YearOfIssue=req.body.YearOfIssue;
    // let FuelType=req.body.FuelType;
    // let LinkToPicture=req.body.LinkToPicture;

    // let Brand="Huy";
    // let Model="GAvno";
    // let Mileage="Ebanina";
    // let Colour="Nanavizu";
    // let Price="Ebaniy";
    // let EngineVolume="Web";
    // let TypeOfDrive="Suka";
    // let GearboxType="Idet vse v pizdy";
    // let YearOfIssue="hh";
    // let FuelType="asdadad";
    // let LinkToPicture="https://i.ytimg.com/vi/NxAgJSeVZqI/maxresdefault.jpg";
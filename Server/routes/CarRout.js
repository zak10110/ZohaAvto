const CarModel = require("../models/CarModel");
async function CarRouter(app){
app.get('/api/addcar',async(req,res)=>{
    console.log("NU i Gavno");
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
    let Brand="Gay";
    let Model="Gay";
    let Mileage="Gay";
    let Colour="Gay";
    let Price="Gay";
    let EngineVolume="Gay";
    let TypeOfDrive="Gay";
    let GearboxType="Gay";
    let YearOfIssue="Gay";
    let FuelType="Gay";
    let LinkToPicture="https://images.theconversation.com/files/230083/original/file-20180731-136664-10ogeog.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop";

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
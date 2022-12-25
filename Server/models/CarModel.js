const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarScheme = new Schema({
  Brand: String,
  Model: String,
  Mileage: String,
  Colour: String,
  Price: String,
  EngineVolume: String,
  TypeOfDrive: String,
  GearboxType: String,
  YearOfIssue: String,
  FuelType: String,
  LinkToPicture:String,
});

const Car = mongoose.model("cars", CarScheme);

module.exports = {
  Car,
};


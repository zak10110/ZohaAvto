const { Schema, model } = require("mongoose");

const CarScheme = new Schema({
    Brand: { type: String, required: true },
    Model: { type: String, required: true },
    Mileage: { type: String, required: true },
    Colour: { type: String, required: true },
    Price: { type: String, required: true },
    EngineVolume: { type: String, required: true },
    TypeOfDrive: { type: String, required: true },
    GearboxType: { type: String, required: true },
    YearOfIssue: { type: String, required: true },
    FuelType: { type: String, required: true },
    LinkToPicture: { type: String, required: true },
});

module.exports = model('Car', CarScheme);


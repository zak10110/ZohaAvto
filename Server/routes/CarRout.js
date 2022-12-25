const express = require("express");
const carRouter = express.Router();
const Cars = require("../models/CarModel.js");

carRouter.post("/api/addCar", async (req, res) => {
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
    var car = new Cars.Car({
        Brand: Brand,
        Model: Model,
        Mileage: Mileage,
        Colour: Colour,
        Price: Price,
        EngineVolume: EngineVolume,
        TypeOfDrive: TypeOfDrive,
        GearboxType: GearboxType,
        YearOfIssue: YearOfIssue,
        FuelType: FuelType,
        LinkToPicture:LinkToPicture,
    });
    await car
      .save()
      .then(() => {
        res.json({ isAdded: true });
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
  
  module.exports = carRouter;


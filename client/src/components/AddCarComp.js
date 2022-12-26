
import { Link } from "react-router-dom";
import React from "react";
import '../css/styles.css';

function AddCarApp() {
  async function AddCar() {
    await fetch("/api/addcar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Brand: document.getElementById("Brand")?.value,
        Model: document.getElementById("Model")?.value,
        Mileage: document.getElementById("Mileage")?.value,
        Colour: document.getElementById("Colour")?.value,
        Price: document.getElementById("Price")?.value,
        EngineVolume:  document.getElementById("EngineVolume")?.value,
        TypeOfDrive: document.getElementById("TypeOfDrive")?.value,
        GearboxType: document.getElementById("GearboxType")?.value,
        YearOfIssue: document.getElementById("YearOfIssue")?.value,
        FuelType: document.getElementById("FuelType")?.value,
        LinkToPicture: document.getElementById("LinkToPicture")?.value,
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
    });
    
  }
  return (

  
    <div className="postcard">
    <div className="form-row">
    <label >Brand</label><input type="text" id="Brand" required></input>
    </div>
    <div className="form-row">
    <label >Model</label><input type="text" id="Model" required></input>
    </div>
    <div className="form-row">
    <label >Mileage</label><input type="text" id="Mileage" required></input>
    </div>
    <div className="form-row">
    <label >Colour</label><input type="text" id="Colour" required></input>
    </div>
    <div className="form-row">
    <label >Price</label><input type="text" id="Price" required></input>
    </div>
    <div className="form-row">
    <label >EngineVolume</label><input type="text" id="EngineVolume" required></input>
    </div>
    <div className="form-row">
    <label >TypeOfDrive</label><input type="text" id="TypeOfDrive" required></input>
    </div>
    <div className="form-row">
    <label>GearboxType</label><input type="text" id="GearboxType" required></input>
    </div>
    <div className="form-row">
    <label >YearOfIssue</label><input type="text" id="YearOfIssue" required></input>
    </div>
    <div className="form-row">
    <label >FuelType</label><input type="text" id="FuelType" required></input>
    </div>
    <div className="form-row">
    <label >LinkToPicture</label><input type="text" id="LinkToPicture" required></input>
    </div>
    <div className="form-row">
    <input onClick={AddCar} type="submit" value="Отправить сообщение"></input>
    </div>
    <a href="http://localhost:3000/" class="floating-button">Go Back</a>
    </div>

  );
}

export default AddCarApp;

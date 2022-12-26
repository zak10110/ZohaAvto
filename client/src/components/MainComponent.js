import React from "react";
import '../css/styles.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function CarFetch(props) {
    const [car, setCar] = useState([]);

    useEffect(() => {
        getCar();
    }, [])

    const getCar = async () => {
        await fetch('/api/getcars')
            .then(result  => result.json())
            .then(result  => setCar(result.cursor));
    }


    if (!car) {
        return <div>
            <div>Loading...</div>
        </div>
    }
    else if (car == null || car?.length <= 0) {
        return <div>
             <a href="http://localhost:3000/addcard" class="floating-button">Add Card</a>
            <div>There is no Cars</div>
            <div onClick={getCar} className={'button'}>Update</div>
        </div>
    }

    return <div className="back" >
        <a href="http://localhost:3000/addcard" class="floating-button">Add Card</a>
        <div className="divforcards">
            {car?.map((cursor) => {
                return <div className="card">
                    <img className="cardimg" src={cursor.LinkToPicture}></img>
                    <h4>Марка:{cursor.Brand} Модель:{cursor.Model} Год выпуска:{cursor.YearOfIssue}</h4>
                    <h5>Пробег:{cursor.Mileage}</h5>
                    <h5>{cursor.TypeOfDrive}{cursor.EngineVolume}</h5>
                    <h5>{cursor.GearboxType}{cursor.FuelType}</h5>
                    <h5>{cursor.Price}</h5>
                    <a className="floating-button">Button</a>
                    
                    
                </div>
            })}
        </div>
    </div>



};

export default CarFetch;

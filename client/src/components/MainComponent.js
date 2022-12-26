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
            <div>There is no Cars</div>
            <div onClick={getCar} className={'button'}>Update</div>
        </div>
    }

    return <div className="back" >
        <div className="divforcards">
            {car?.map((cursor) => {
                return <div className="card">
                    <img className="cardimg" src={cursor.LinkToPicture}></img>
                    <h2>{cursor.Brand}{cursor.Model}{cursor.Mileage}</h2>
                   
                </div>
            })}
        </div>
    </div>

  

};

export default CarFetch;

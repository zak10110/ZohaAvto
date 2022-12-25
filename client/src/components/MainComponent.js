import React from "react";
import { useState, useEffect } from 'react';
import Ya_NA_Sdache_Reacta from './TochnoNePorno.gif';
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

    return <div style={{backgroundColor:"green",width:"500px",height:"500px"}} >
        <div style={{backgroundColor:"red",width:"200px",height:"200px"}}>
            {car?.map((cursor) => {
                return <div>
                    <h2>{cursor.Brand}{cursor.Model}{cursor.Mileage}</h2>
                    <img src={Ya_NA_Sdache_Reacta} style={{width:"150px",height:"150px"}}></img>
                </div>
            })}
        </div>
    </div>

  

};

export default CarFetch;

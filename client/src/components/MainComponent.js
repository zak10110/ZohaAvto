import React from "react";

function CarFetch(props) {
    const [car, setCar] = React.useState([]);

    React.useEffect(() => {
        getCar();
    }, [])

    const getCar = async () => {
        await fetch('/getcars')
            .then(cursor => cursor.json())
            .then(cursor => setCar(cursor.cursor));
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

    return <div className='flex_content'>
        <div style={{backgroundColor:"red"}}>
            {car?.map((cursor) => {
                return <div>
                    <h2>{cursor.Brand}</h2>
                </div>
            })}
        </div>
    </div>

};

export default CarFetch;

import React, { useContext } from "react";
import "./Estate.css";


function Estate(props) {

    const estate = props.estate;
    return (
        <div className='estate'>
            <h1>{estate.description}</h1>
            <div className="estate-record-columns">
                <div className="picture-box">
                    <img src={estate.image} alt="Estate" className="estate-img" />
                </div>
                <div>
                    <p>Price: {estate.price} PLN</p>
                    <p>City: {estate.location}</p>
                    <p>Address: {estate.address}</p>
                    <p>Rooms: {estate.rooms}</p>
                </div>
            </div>
        </div>

    );
}

export default Estate;  
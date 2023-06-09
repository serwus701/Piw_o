import React from "react";
import "./Estate.css";

function Estate(props) {

    return (
        <div className='estate'>
            <h1>{props.description}</h1>
            <div className="estate-record-columns">
                <div className="picture-box">
                    <img src={props.image} alt="Estate" className="estate-img" />
                    <button
                        className="add-to-cart-button"
                        onClick={() => props.addToCart(props.id)}
                    >
                        Add to cart
                    </button>
                </div>
                <div>
                    <p>Price: {props.price} PLN</p>
                    <p>City: {props.location}</p>
                    <p>Address: {props.address}</p>
                    <p>Rooms: {props.rooms}</p>
                </div>
            </div>
        </div>

    );
}

export default Estate;  
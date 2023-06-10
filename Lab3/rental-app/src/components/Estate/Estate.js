import React, { useContext } from "react";
import { ReferenceDataContext } from "../../ReferenceDataContext";
import "./Estate.css";


function Estate(props) {

    const estate = props.estate;
    const { userLogged, setUserLogged } = useContext(ReferenceDataContext);

    return (
        <div className='estate'>
            <h1>{estate.description}</h1>
            <div className="estate-record-columns">
                <div className="picture-box">
                    <img src={estate.image} alt="Estate" className="estate-img" />
                    {/* {
                        props.isCart ? (
                            <button
                                className="add-to-cart-button"
                                onClick={() => props.handleCartButton(estate)}
                            >
                                Remove from cart
                            </button>
                        ) :

                            <button
                                className="add-to-cart-button"
                                onClick={() => props.handleCartButton(estate)}
                            >
                                Add to cart
                            </button>
                    } */}

                    {userLogged ?
                        props.isCart ?
                            <button
                                className="add-to-cart-button"
                                onClick={() => props.handleCartButton(estate)}
                            >
                                Remove from cart
                            </button>
                            :
                            <button
                                className="add-to-cart-button"
                                onClick={() => props.handleCartButton(estate)}
                            >
                                Add to cart
                            </button> :
                        null
                    }



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
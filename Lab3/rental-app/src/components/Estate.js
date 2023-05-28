import React from "react";
import "./Estate.css";

function Estate(props) {
    const [rooms, setRooms] = React.useState(props.rooms);
    const [price, setPrice] = React.useState(props.price);
    const [description, setDescription] = React.useState(props.description);
    const [location, setLocation] = React.useState(props.location);
    const [address, setAddress] = React.useState(props.address);
    const [image, setImage] = React.useState(props.image);


    return (
        <div className='estate'>
            <h1>{description}</h1>
            <div className="estate-record-columns">
                <div>
                    <img src={image} alt="Estate" className="estate-img" />
                </div>
                <div>
                    <p>Price: {price} PLN</p>
                    <p>City: {location}</p>
                    <p>Address: {address}</p>
                    <p>Rooms: {rooms}</p>
                </div>
            </div>
        </div>

    );
}

export default Estate;  
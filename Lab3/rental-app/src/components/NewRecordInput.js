import React from 'react';
import './NewRecordInput.css';

const NewRecordInput = (props) => {
    const [city, setCity] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [rooms, setRooms] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");

    return (
        <div className='record-input-box'>
            <div>
                City:
                <input type="text" placeholder="Location"
                    onChange={
                        event => setCity(event.target.value)
                    } />
            </div>
            <div>
                address:
                <input type="text" placeholder="Address"
                    onChange={
                        event => setAddress(event.target.value)
                    } />
            </div>
            <div>
                rooms number:
                <input type="number" placeholder="Rooms"
                    onChange={
                        event => setRooms(event.target.value)
                    } />
            </div>
            <div>
                price:
                <input type="number" placeholder="Price"
                    onChange={
                        event => setPrice(event.target.value)
                    } />
            </div>
            <div>
                description:
                <input type="text" placeholder="Description"
                    onChange={
                        event => setDescription(event.target.value)
                    } />
            </div>
            <div>
                image src:
                <input type="text" placeholder="Image src"
                    onChange={
                        event => setImage(event.target.value)
                    } />
            </div>


            <button onClick={props.addNewRecord({
                city: city,
                address: address,
                rooms: rooms,
                price: price,
                description: description,
                image: image
            })}>
                Add new record</button>
        </div>
    );
}

export default NewRecordInput;
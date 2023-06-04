import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AddNew.css';

export default function AddNew({ handler }) {
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [rooms, setRooms] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        if (!city || !address || !rooms || !price || !description) {
            alert('Please fill all fields')
            return;
        }

        const newProperty = {
            city: city,
            address: address,
            rooms: rooms,
            price: price,
            description: description,
            image: image
        };

        handler(newProperty);
        navigate('/');
    }


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
            <div>
                <button onClick={handleSubmit}>
                    Add new record</button>
                <button onClick={() => navigate('/')} >
                    Cancel</button>
            </div>



        </div>
    );
}
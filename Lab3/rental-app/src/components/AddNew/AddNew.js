import React from 'react';
import './AddNew.css';
import { useNavigate } from 'react-router-dom';

const AddNew = ({ handler, maxId }) => {
    let city = "";
    let address = "";
    let rooms = "";
    let price = "";
    let description = "";
    let image = "";

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!city || !address || !rooms || !price || !description) {
            alert('Please fill all fields')
            return;
        }

        const newProperty = {
            location: city,
            address: address,
            rooms: rooms,
            price: price,
            description: description,
            image: image,
            id: maxId + 1
        };

        handler(newProperty);
        navigate('/');
    }

    return (
        <div className='record-input-box'>
            <h1>Add new record</h1>
            <div>
                <h4>City:</h4>
                <input
                    type="text"
                    placeholder="Location"
                    className='details-input'
                    onChange={
                        event => city = event.target.value
                    } />
            </div>
            <div>
                <h4>Address:</h4>
                <input
                    type="text"
                    placeholder="Address"
                    className='details-input'
                    onChange={
                        event => address = event.target.value
                    } />
            </div>
            <div>
                <h4>Rooms number:</h4>
                <input
                    type="number"
                    placeholder="Rooms"
                    className='details-input'
                    onChange={
                        event => rooms = event.target.value
                    } />
            </div>
            <div>
                <h4>Price:</h4>
                <input
                    type="number"
                    placeholder="Price"
                    className='details-input'
                    onChange={
                        event => price = event.target.value
                    } />
            </div>
            <div>
                <h4>Description:</h4>
                <input
                    type="text"
                    placeholder="Description"
                    className='details-input'
                    onChange={
                        event => description = event.target.value
                    } />
            </div>
            <div>
                <h4>Image source:</h4>
                <input
                    type="text"
                    placeholder="Image src"
                    className='details-input'
                    onChange={
                        event => image = event.target.value
                    } />
            </div>
            <div>
                <button
                    onClick={handleSubmit}
                    className='navigation-button'
                >
                    Add new record</button>
                <button
                    onClick={() => navigate('/')}
                    className='navigation-button'
                >
                    Cancel</button>
            </div>



        </div>
    );
}

export default AddNew;
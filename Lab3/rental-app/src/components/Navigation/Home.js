import React from 'react';
import EstateList from '../EstateList.js';
import Navbar from '../Navbar.js'

export default function Home() {
    const [cityFilter, setCityFilter] = React.useState("");
    const [roomsFilter, setRoomsFilter] = React.useState(null);
    const [descriptionFilter, setDescriptionFilter] = React.useState("");

    return (
        <div>
            <Navbar
                setCityFilter={setCityFilter}
                setRoomsFilter={setRoomsFilter}
                setDescriptionFilter={setDescriptionFilter}
            />
            <EstateList
                cityFilter={cityFilter}
                roomsFilter={roomsFilter}
                descriptionFilter={descriptionFilter}
            />
        </div>
    );
}
import React from 'react';
import EstateList from '../EstateList.js';
import Navbar from '../Navbar.js'

export default function Home(props) {

    return (
        <div>
            <Navbar
                setCityFilter={props.setCityFilter}
                setRoomsFilter={props.setRoomsFilter}
                setDescriptionFilter={props.setDescriptionFilter}
            />
            <EstateList
                estateList={props.estateList}

                cityFilter={props.cityFilter}
                roomsFilter={props.roomsFilter}
                descriptionFilter={props.descriptionFilter}
            />
        </div>
    );
}
import React from 'react';
import Navbar from './Navbar/Navbar';
import EstateList from './EstateList';

const Home = (props) => {
    return (
        <div>
            <Navbar
                setCityFilter={props.setCityFilter}
                setRoomsFilter={props.setRoomsFilter}
                setDescriptionFilter={props.setDescriptionFilter}
                setPriceSortSelect={props.setPriceSortSelect}
                priceSortSelect={props.priceSortSelect}
                isCart={false}
            />
            <EstateList
                estateList={props.estateList}
                handleCartButton={props.handleCartButton}
                isCart={false}
            />
        </div>
    );
}

export default Home;
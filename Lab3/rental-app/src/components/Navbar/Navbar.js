import React, { useContext } from "react";
import "./Navbar.css";
import { ReferenceDataContext } from "../../ReferenceDataContext";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

function Navbar(props) {
    const navigate = useNavigate();
    const { userLogged, setUserLogged } = useContext(ReferenceDataContext);

    const options = [
        { value: '', label: 'None' },
        { value: 'Ascending', label: 'Ascending' },
        { value: 'Descending', label: 'Descending' },
    ];

    return (
        <div className="navbar">
            <div className="input-section">
                <div>
                    <div>Filter by city:</div>
                    <input className="filter-input" type="text"
                        placeholder="Filter by city"
                        onChange={event => props.setCityFilter(event.target.value)}
                    />
                </div>
                <div>
                    <div>Filter by rooms:</div>
                    <input className="filter-input" type="number"
                        placeholder="Filter by rooms"
                        onChange={event => {
                            if (event.target.value === "") {
                                props.setRoomsFilter(null)
                                return
                            }
                            props.setRoomsFilter(event.target.value)
                        }
                        }
                    />
                </div>
                <div>
                    <div>Filter by description:</div>
                    <input className="filter-input" type="text"
                        placeholder="Filter by description"
                        onChange={event => props.setDescriptionFilter(event.target.value)}
                    />
                </div>
                <div>
                    Sort by price:
                    <Select
                        placeholder="Sort by price"
                        className="price-sort-dropdown"
                        defaultValue={props.priceSortSelect}
                        onChange={event => {
                            props.setPriceSortSelect(event.value)
                        }
                        }
                        options={options}
                    />
                </div>

            </div>

            <div className="buttons-section">
                {userLogged ? (
                    <div className="route-button">
                        {`Hello ${userLogged.name}!`}
                        <button
                            className="route-button"
                            onClick={() => {
                                setUserLogged(null);
                            }}
                        >
                            Log Out
                        </button>

                        {
                            props.isCart ?
                                <button
                                    className="route-button"
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                >
                                    Home
                                </button>
                                :
                                <button
                                    className="route-button"
                                    onClick={() => {
                                        navigate('/cart');
                                    }}
                                >
                                    Cart
                                </button>
                        }
                    </div>


                ) : (
                    <div className="route-button">

                        <button
                            className="route-button"
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Login
                        </button>
                    </div>

                )}
                <div className="route-button">

                    <button
                        className="route-button"
                        onClick={() => {
                            navigate('/addNew');
                        }}
                    >
                        Add New
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Navbar;
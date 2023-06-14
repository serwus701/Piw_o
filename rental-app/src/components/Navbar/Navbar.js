import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

function Navbar(props) {
    const navigate = useNavigate();
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
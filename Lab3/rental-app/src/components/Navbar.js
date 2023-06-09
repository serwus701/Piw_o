import React from "react";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';


function Navbar({ setCityFilter, setRoomsFilter, setDescriptionFilter }) {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="input-section">
                <div>
                    Filter by city:
                    <input className="filter-input" type="text"
                        placeholder="Filter by city"
                        onChange={event => setCityFilter(event.target.value)}
                    />
                </div>
                <div>
                    Filter by rooms:
                    <input className="filter-input" type="number"
                        placeholder="Filter by rooms"
                        onChange={event => {
                            if (event.target.value === "") {
                                setRoomsFilter(null)
                                return
                            }
                            setRoomsFilter(event.target.value)
                        }
                        }
                    />
                </div>
                <div>
                    Filter by description:
                    <input className="filter-input" type="text"
                        placeholder="Filter by description"
                        onChange={event => setDescriptionFilter(event.target.value)}
                    />
                </div>
            </div>

            <div className="buttons-section">
                <button
                    className="route-button"
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    Login
                </button>
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
    );
}

export default Navbar;
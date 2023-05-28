import React from "react";
import "./Navbar.css";

function Navbar({ setCityFilter, setRoomsFilter, setDescriptionFilter }) {

    return (
        <div className="navbar">
            <div>
                Filter by city:
                <input class="filter-input" type="text"
                    placeholder="Filter by city"
                    onChange={event => setCityFilter(event.target.value)}
                />
            </div>
            <div>
                Filter by rooms:
                <input class="filter-input" type="number"
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
                <input class="filter-input" type="text"
                    placeholder="Filter by description"
                    onChange={event => setDescriptionFilter(event.target.value)}
                />
            </div>
        </div>
    );
}

export default Navbar;
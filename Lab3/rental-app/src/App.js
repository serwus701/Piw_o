import './App.css';
import React from 'react';
import EstateList from './components/EstateList.js';
import Navbar from './components/Navbar.js';


function App() {

  const [cityFilter, setCityFilter] = React.useState("");
  const [roomsFilter, setRoomsFilter] = React.useState(null);
  const [descriptionFilter, setDescriptionFilter] = React.useState("");

  return (
    <div className="App">
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

export default App;

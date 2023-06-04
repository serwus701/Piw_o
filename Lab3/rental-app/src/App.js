import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Navigation/Home';
import AddNew from './components/Navigation/AddNew';
import axios from 'axios';


function App() {
  const [estateList, setEstateList] = React.useState([]);

  const [cityFilter, setCityFilter] = React.useState("");
  const [roomsFilter, setRoomsFilter] = React.useState(null);
  const [descriptionFilter, setDescriptionFilter] = React.useState("");

  useEffect(() => {
    axios.get('/initData/estates.json')
      .then(response => {
        setEstateList(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const handleNewEstateSubmit = (newEstate) => {
    setEstateList([...estateList, newEstate]);
    console.log(estateList);
  }

  const filteredEstates = estateList.filter((estate) => {
    if (descriptionFilter && !estate.description.toLowerCase().includes(descriptionFilter.toLowerCase())) {
      return false;
    }

    if (roomsFilter && estate.rooms !== parseInt(roomsFilter)) {
      return false;
    }

    return !(cityFilter && !estate.location.toLowerCase().includes(cityFilter.toLowerCase()));

  });
  // .sort((a, b) => {
  //   switch (sortBy) {
  //     case 'asc':
  //       return a.price - b.price;
  //     case 'desc':
  //       return b.price - a.price;
  //     default:
  //       return 0;
  //   }
  // });


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Home
              estateList={filteredEstates}

              cityFilter={cityFilter}
              setCityFilter={setCityFilter}
              roomsFilter={roomsFilter}
              setRoomsFilter={setRoomsFilter}
              descriptionFilter={descriptionFilter}
              setDescriptionFilter={setDescriptionFilter}
            />
          } />
          <Route path="/addNew" element={
            <AddNew
              handler={handleNewEstateSubmit}
            />}
          />
        </Routes>
      </Router>
    </div>

  );
}

export default App;

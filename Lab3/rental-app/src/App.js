import './App.css';
import React, { useState, useEffect } from 'react';
import { ReferenceDataContextProvider } from "./components/ReferenceDataContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Navigation/Home';
import AddNew from './components/AddNew';
import Login from './components/Navigation/Login';
import axios from 'axios';


function App() {
  const [estateList, setEstateList] = useState([]);

  const [cityFilter, setCityFilter] = useState("");
  const [roomsFilter, setRoomsFilter] = useState(null);
  const [descriptionFilter, setDescriptionFilter] = useState("");

  const [users, setUsers] = useState([
    {
      login: "admin",
      password: "admin"
    },
    {
      login: "user",
      password: "user"
    }
  ]);

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


  return (
    <div className="App">
      <ReferenceDataContextProvider>
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
              />} />
            <Route path="/addNew" element={<AddNew handler={handleNewEstateSubmit} />} />
            <Route path="/login" element={<Login users={users} />} />
          </Routes>
        </Router>
      </ReferenceDataContextProvider>
    </div>
  );
}

export default App;

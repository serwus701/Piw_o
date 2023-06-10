import './App.css';
import React, { useState, useEffect, useReducer } from 'react';
import { ReferenceDataContextProvider } from "./ReferenceDataContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddNew from './components/AddNew/AddNew';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import axios from 'axios';
import Home from './components/Home';


function App() {
  const [estateList, setEstateList] = useState([]);

  const [cityFilter, setCityFilter] = useState("");
  const [roomsFilter, setRoomsFilter] = useState(null);
  const [descriptionFilter, setDescriptionFilter] = useState("");

  const [priceSortSelect, setPriceSortSelect] = useState("");

  const [cart, dispatch] = useReducer(reducer, []);



  function reducer(cart, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        if (cart.length > 0) {
          return [...cart, action.item];
        }
        else {
          return [action.item]
        }

      case 'REMOVE_FROM_CART':
        return cart.filter(item => item.id !== action.item.id)
      default:
        return cart;
    }
  }

  function addToCart(item) {
    dispatch({ type: 'ADD_TO_CART', item: item });
  }

  function removeFromCart(item) {
    dispatch({ type: 'REMOVE_FROM_CART', item: item });
  }

  const [users, setUsers] = useState([
    {
      login: "admin",
      password: "admin",
      name: "Michał",
      surname: "Malewicz"
    },
    {
      login: "user",
      password: "user",
      name: "Jan",
      surname: "Kowalski"
    },
    {
      login: "user2",
      password: "user2",
      name: "Adam",
      surname: "Nowak"
    }
  ]);


  useEffect(() => {
    axios.get('/initData/estates.json')
      .then(response => {
        const dataWithIds = response.data.map((item, index) => (
          { ...item, id: index }));
        setEstateList(dataWithIds);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);



  const handleNewEstateSubmit = (newEstate) => {
    setEstateList([...estateList, newEstate]);
  }

  const filteredEstates = estateList.filter((estate) => {
    if (descriptionFilter && !estate.description.toLowerCase().includes(descriptionFilter.toLowerCase())) {
      return false;
    }

    if (roomsFilter && estate.rooms !== parseInt(roomsFilter)) {
      return false;
    }

    return !(cityFilter && !estate.location.toLowerCase().includes(cityFilter.toLowerCase()));

  }).sort((a, b) => {
    switch (priceSortSelect) {
      case 'Ascending':
        return a.price - b.price;
      case 'Descending':
        return b.price - a.price;
      default:
        return 0;
    }
  });


  return (
    <div className="App">
      <ReferenceDataContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <Home
                setCityFilter={setCityFilter}
                setRoomsFilter={setRoomsFilter}
                setDescriptionFilter={setDescriptionFilter}
                setPriceSortSelect={setPriceSortSelect}
                priceSortSelect={priceSortSelect}
                estateList={filteredEstates}
                handleCartButton={addToCart}
              />
            }
            />
            <Route
              path="/addNew"
              element={
                <AddNew handler={handleNewEstateSubmit}
                  maxId={Math.max(...estateList.map(item => item.id))}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login users={users} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  estateList={cart}
                  handleCartButton={removeFromCart}
                  isCart={true}
                />
              }
            />
          </Routes>
        </Router>
      </ReferenceDataContextProvider>
    </div>
  );
}

export default App;

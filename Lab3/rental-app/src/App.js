import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Navigation/Home';
import AddNew from './components/Navigation/AddNew';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addNew" element={<AddNew />} />
      </Routes>
    </div>

  );
}

export default App;

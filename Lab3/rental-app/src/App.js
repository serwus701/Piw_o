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
  addNewRecord = ({ }) => {
    console.log(newRecord);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNew" element={<AddNew addNewRecord={addNewRecord} />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;

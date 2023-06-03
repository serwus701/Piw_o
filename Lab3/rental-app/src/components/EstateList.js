import React from "react";
import axios from 'axios';
import Estate from "./Estate.js";

function EstateList(props) {
  const [estateList, setEstateList] = React.useState([]);

  const cityFilter = props.cityFilter;
  const roomsFilter = props.roomsFilter;
  const descriptionFilter = props.descriptionFilter;


  axios.get('/initData/estates.json')
    .then(response => {
      setEstateList(response.data);
    })
    .catch(error => {
      console.error('Error fetching properties:', error);
    });


  return (
    <div className="estate-list">
      {estateList.map(
        estate =>
          (
            estate.location.toLowerCase().includes(cityFilter.toLowerCase()) &&
            estate.description.toLowerCase().includes(descriptionFilter.toLowerCase()) &&
            (estate.rooms == roomsFilter || roomsFilter === null)
          ) ? <Estate
            address={estate.address}
            rooms={estate.rooms}
            price={estate.price}
            description={estate.description}
            location={estate.location}
            image={estate.image}
          /> : null)}
    </div>
  );
}

export default EstateList;
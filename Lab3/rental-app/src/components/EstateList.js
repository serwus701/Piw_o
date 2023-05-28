import React from "react";
import axios from 'axios';
import Estate from "./Estate.js";

function EstateList(props) {

  let estateList = [];
  const cityFilter = props.cityFilter;
  const roomsFilter = props.roomsFilter;
  const descriptionFilter = props.descriptionFilter;



  // axios.get('./estates.json')
  //   .then(response => {
  //     response.data.map(
  //       estate => {
  //         this.state.estateList.push([
  //           <Estate 
  //           address={estate.address}
  //           rooms={estate.rooms}
  //           price={estate.price}
  //           description={estate.description}
  //           location={estate.location}
  //           image={estate.image}
  //           />
  //         ]
  //         )
  //       }
  //     )
  //   })
  //   .catch(error => {
  //     console.error('Error fetching properties:', error);
  //   });




  estateList.push({
    address: "Wroclawska 1/234",
    rooms: 1,
    price: 10000,
    description: "This is not a beautiful estate",
    location: "Wroclaw",
    image: "./photos/apart1.jpg"
  });

  estateList.push({
    address: "Malinowa 1/234",
    rooms: 2,
    price: 10000,
    description: "Description",
    location: "Warszawa",
    image: "./photos/apart1.jpg"
  });

  for (let i = 0; i < 4; i++) {
    estateList.push({
      address: "Malinowa 1/234",
      rooms: 3,
      price: 10000,
      description: "This is a beautiful estate",
      location: "Malin",
      image: "./photos/apart1.jpg"
    });
  }


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
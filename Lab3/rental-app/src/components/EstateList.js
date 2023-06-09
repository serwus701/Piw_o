import React from "react";
import Estate from "./Estate.js";

function EstateList(props) {
  let counter = 1;


  return (
    <div className="estate-list">
      {props.estateList.map(
        estate =>
          <Estate
            key={counter++}
            address={estate.address}
            rooms={estate.rooms}
            price={estate.price}
            description={estate.description}
            location={estate.location}
            image={estate.image}
          />
      )
      }
    </div>
  );
}

export default EstateList;
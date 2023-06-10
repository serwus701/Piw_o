import React from "react";
import Estate from "./Estate/Estate.js";

function EstateList(props) {
  let counter = 1;

  return (
    <div className="estate-list">
      {props.estateList.map(
        estate =>
          <Estate
            estate={estate}
            key={counter++}
            handleCartButton={props.handleCartButton}
            isCart={props.isCart}
          />
      )}
    </div>
  );
}

export default EstateList;
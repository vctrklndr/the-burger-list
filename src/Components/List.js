import React from "react";
import ListItem from "./ListItem";
import chair from "../Assets/Images/chair.svg";
import takeaway from "../Assets/Images/takeaway.svg";
import foodtruck from "../Assets/Images/foodtruck.svg";

function List({ burgerjoints }) {
  let list = burgerjoints.map((item, index) => {
    return (
      <ListItem
        key={index}
        web={item.web}
        map={item.map}
        name={item.name}
        distance={item.distance}
        image={
          item.type === "restaurant" ? (
            <img src={chair} alt="Restaurant" />
          ) : item.type === "takeaway" ? (
            <img src={takeaway} alt="Takeaway" />
          ) : item.type === "foodtruck" ? (
            <img src={foodtruck} alt="Foodtruck" />
          ) : (
            ""
          )
        }
      />
    );
  });

  return (
    <div className="List-container">
      <ul id="burgerList" className="List">
        {list}
      </ul>
    </div>
  );
}

export default List;

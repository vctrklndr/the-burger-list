import React from "react";

function ListHeading(props) {
  return (
    <div className={props.className}>
      <span onClick={props.onClick} className="List-heading">
        {props.title}
      </span>
    </div>
  );
}
export default ListHeading;

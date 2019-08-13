import React from "react";

function ListItem(props) {
  return (
    <li className="List-item" key={props.keys}>
      <div className="u-size6of12">
        <a href={props.web} rel="noopener noreferrer" target="_blank">
          {props.name}
        </a>
      </div>
      <div className="u-alignRight u-size3of12">
        <a href={props.map} rel="noopener noreferrer" target="_blank">
          {props.distance}m
        </a>
      </div>
      <div className="u-alignRight u-size3of12">
        <div className="Icon-smallContainer u-textCenter">{props.image}</div>
      </div>
    </li>
  );
}

export default ListItem;

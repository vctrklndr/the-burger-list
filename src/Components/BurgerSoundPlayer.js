import React from "react";

function BurgerSoundPlayer(props) {
  return (
    <div className="Headphones" onClick={props.onClick}>
      <img
        className="Headphones-icon"
        src={props.imagesrc}
        alt="Headphones"
      />
      <p className="BurgerASMR">Play some sweet burger ASMR</p>
    </div>
  );
}

export default BurgerSoundPlayer;

import React from "react";
import burgerlogo from "../Assets/Images/logo.png";
import noalogo from "../Assets/Images/noa.png";

function Header(props) {
  return (
    <header>
      <section className="u-textCenter">
        <img className="Image-burgerLogo" src={burgerlogo} alt="Burger logo" />
        <p className="u-textRight u-textThin u-textSmall">version {props.version}</p>
        <p className="u-marginTsm">
          Near <img className="Image-noaLogo" src={noalogo}  alt="NoA logo" /> house
        </p>
      </section>
    </header>
  );
}

export default Header;

import React, { Component } from "react";
import burgerIcon from "../Assets/Images/burger.gif";
import friesIcon from "../Assets/Images/fries.gif";
import beerIcon from "../Assets/Images/beer.gif";

export class Icons extends Component {
  state = {
    burger: "hidden",
    fries: "hidden",
    beer: "hidden"
  };

  displayIcon = (icon, display, time) => {
    setTimeout(() => this.setState({ [icon]: display }), time);
  };

  componentDidMount = () => {
    this.displayIcon("burger", "block", 333);
    this.displayIcon("fries", "block", 666);
    this.displayIcon("beer", "block", 999);
  };

  render() {
    const { burger, fries, beer } = this.state;
    return (
      <section className="Section-icons u-marginTmd u-textCenter">
        <div className="Icon-container">
          <div className="u-size1of3">
            <img
              id="Burger"
              className={`Icon ${burger}`}
              src={burgerIcon}
              alt="Burger"
            />
          </div>
          <div className="u-size1of3">
            <img
              id="Fries"
              className={`Icon ${fries}`}
              src={friesIcon}
              alt="Fries"
            />
          </div>
          <div className="u-size1of3">
            <img
              id="Beer"
              className={`Icon ${beer}`}
              src={beerIcon}
              alt="Beer"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Icons;

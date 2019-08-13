import React, { Component } from "react";
import ListHeading from "./ListHeading";
import fetchBurgerJoints from "../Functions/FetchBurgerJoints";
import List from "./List";

export class BurgerList extends Component {
  state = {
    burgerjoints: [],
    sortby: "distance",
    ascending: true
  };

  componentDidMount = () => {
    const burgerJointFetch = fetchBurgerJoints();
    burgerJointFetch.then(burgerjoints => {
      this.setState({
        burgerjoints: burgerjoints
      });
    });
  };

  compare = prop => {
    const ascending = this.state.ascending;
    if (ascending === true) {
      return function(a, b) {
        if (a[prop] < b[prop]) {
          return -1;
        }
      };
    } else if (ascending === false) {
      return function(a, b) {
        if (a[prop] > b[prop]) {
          return -1;
        }
      };
    }
  };

  sortBurgerJointBy = (type, sort) => {
    this.setState({
      sortby: type,
      ascending: sort
    });
  };

  render() {
    const { burgerjoints, sortby } = this.state;
    const { sortBurgerJointBy, compare } = this;
    return (
      <section>
        <div className="u-flex">
          <ListHeading
            title="Restaurant"
            className="u-flex u-size6of12"
            onClick={() => sortBurgerJointBy("name", true)}
          />
          <ListHeading
            title="Distance"
            className="u-alignRight u-size3of12"
            onClick={() => sortBurgerJointBy("distance", true)}
          />
          <ListHeading
            title="Type"
            className="u-alignRight u-size3of12"
            onClick={() => sortBurgerJointBy("type", true)}
          />
        </div>
        <List burgerjoints={burgerjoints.sort(compare(sortby))} />
      </section>
    );
  }
}

export default BurgerList;

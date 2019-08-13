import React, { Component } from "react";
import BurgerSoundPlayer from "./BurgerSoundPlayer";
import Headphones from "../Assets/Images/headphones-1.gif";
import HeadphonesPlaying from "../Assets/Images/headphones-2.gif";
import BurgerGorging from "../Assets/burger_asmr.mp3";

export class BurgerSound extends Component {
  state = {
    headphones: Headphones,
    burgerSound: new Audio(BurgerGorging)
  };

  updateHeadphones = () => {
    if (this.state.headphones === Headphones) {
      this.setState({
        headphones: HeadphonesPlaying
      });
    } else if (this.state.headphones !== Headphones) {
      this.setState({
        headphones: Headphones
      });
    }
  };

  playBurgerGorging = () => {
    this.updateHeadphones();
    const audio = this.state.burgerSound;
    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  render() {
    const { headphones } = this.state;
    return (
      <section className="u-textCenter">
        <p className="u-posRelative u-zIndex99 u-marginTlg">
          Some like the taste, some like the sound!
        </p>
        <BurgerSoundPlayer
          imagesrc={headphones}
          onClick={this.playBurgerGorging}
        />
      </section>
    );
  }
}

export default BurgerSound;

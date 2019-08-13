import React from "react";
import "./Assets/Styles/App.scss";
import Corner from "./Components/Corner";
import Header from "./Components/Header";
import Icons from "./Components/Icons";
import BurgerList from "./Components/BurgerList";
import BurgerSound from "./Components/BurgerSound";

function App() {
  return (
    <div className="Page-container">
      <Corner className="Corner Corner-leftTop" />
      <Header version="1.2.1" />
      <main>
        <Icons />
        <BurgerList />
        <BurgerSound />
      </main>
      <Corner className="Corner Corner-rightBottom" />
    </div>
  );
}

export default App;

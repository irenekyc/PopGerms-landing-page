import React from "react";
import Annoncement from "./components/Announcement";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Features2 from "./components/Feautres2";
import Magic from "./components/Magic";
import Ingredients from "./components/Ingredients";
import Intro from "./components/Intro";
import ShopNow from "./components/ShopNow";

function App() {
  return (
    <div className="App">
      <Annoncement />
      <Header />
      <Hero />
      <Features />
      <Features2 />
      <Magic />
      <Ingredients />
      <Intro />
      <ShopNow />
    </div>
  );
}

export default App;

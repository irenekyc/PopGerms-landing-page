import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Features2 from "./components/Feautres2";
import Magic from "./components/Magic";
import Ingredients from "./components/Ingredients";
import Intro from "./components/Intro";
import ShopNow from "./components/ShopNow";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Features2 />
      <Magic />
      <Ingredients />
      <Intro />
      <ShopNow />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

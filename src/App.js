import React from "react";
// import "./index.css";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Portofolio from "./components/Portofolio";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <Portofolio />
      <About />
    </div>
  );
};

export default App;

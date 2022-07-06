import React from "react";
// import "./index.css";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brand from "./components/Brand";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;

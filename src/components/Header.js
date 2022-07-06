import React from "react";

// Import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [background, setBackground] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  });

  return (
    <header
      className={`${
        background ? "bg-primary h-14" : "h-16 "
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 px-3`}
    >
      <div className="container mx-auto h-full flex items-center justify-between  ">
        {/* Darkmode */}
        <div className="text-white font-permanentMarker font-medium text-xl cursor-pointer hover:text-2xl transition-all duration-300">
          Bryan Althafano
        </div>
        {/* Dekstop Nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden  ">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [background, setBackground] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  });

  const navigationsBar = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Portofolio",
    },
    {
      name: "Contact",
    },
  ];

  const navClick = (nav_key) => {
    if (nav_key == "Home") {
      window.scrollTo(0, 0);
    }

    if (nav_key == "About") {
      window.scrollTo(0, 500);
    }

    if (nav_key == "Portofolio") {
      window.scrollTo(0, 1300);
    }

    if (nav_key == "Contact") {
      window.scrollTo(0, 2300);
    }
  };
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigationsBar.map((item, index) => {
          return (
            <li
              className={`${
                background ? "hover:text-white hover:text-base" : ""
              } text-white hover:text-primary cursor-pointer font-medium transition-all `}
              key={index}
            >
              <Link
                onClick={() => navClick(item.name)}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300 "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

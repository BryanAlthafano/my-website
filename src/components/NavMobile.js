import React from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
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

  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white  "
      >
        <HiMenuAlt3 className="w-6 h-6 " />
      </div>

      {/* Circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-primary fixed top-0 right-0"
      ></motion.div>

      {/* Menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          className="cursor-pointer absolute top-6 right-6 "
          onClick={() => setIsOpen(false)}
        >
          <HiX className="w-6 h-6 " />
        </div>
        {navigationsBar.map((item, index) => {
          return (
            <li key={index} className="mb-6">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl cursor-pointer capitalize font-medium"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;

import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Project", route: "project-section" }, // Add a unique ID
    { name: "Contact", route: "contact" },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-md md:px-8 px-1 fixed w-full top-0">
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className="text-xl font-semibold text-decoration-none whitespace-nowrap text-black-600"
            >
              {"Sanjai Kannan G"}
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:w-auto">
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li key={el.name} className="cursor-pointer">
                  <Link
                    to={el.route}
                    activeClass="text-white bg-blue-500"
                    spy={true}
                    smooth={true}
                    className="block py-2 px-3 text-grey hover:bg-blue-500 hover:text-black rounded-md"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:hidden items-center">
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance="lg"
              toggle={setToggle}
              color="#ffffff"
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className="bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  key={el.name}
                  to={el.route}
                  activeClass="text-white bg-blue-500"
                  className="hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

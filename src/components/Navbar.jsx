import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Technologies" },
    { id: 4, name: "Projects" },
    { id: 5, name: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sandun Wijesinghe</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, name }) => {
          return (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
            >
              {name}
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-400 bg-gradient-to-b from-black to-gray-800 ">
          {navLinks.map(({ id, name }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "technologies" },
    { id: 4, name: "projects" }, 
    { id: 5, name: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">SW</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, name }) => {
          return (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
            >
              <Link to={name} smooth duration={500}>{name}</Link>
              
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
                <Link to={name} smooth duration={500} onClick={()=>setNav(!nav)}>{name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;

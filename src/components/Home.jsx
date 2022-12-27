import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 gap-6 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <p className=" max-w-md mb-3 text-lg font-light text-gray-300 md:text-xl dark:text-gray-400">
            Hi, My name is Sandun Wijesinghe.
            <br /> I am a
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold ">Web Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            With years of experience building and designing web applications and
            love to work with the technologies like React,Node,Express and
            MongoDB.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my pic"
            className="rounded-3xl md:max-w-xs  w-2/3 md:w-full mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

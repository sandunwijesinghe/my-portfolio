import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-6xl font-bold ">
            {" "}
            I am a Web Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Web Developer with more than one year of experience in frontend web
            development and hands-on experience in HTML, CSS and JavaScript.
            Experience in JS frameworks (React.js), popular CSS libraries and
            version control tools. Sound knowledge in software engineering
            principles and JavaScript core concepts. Familiarity with Node.js,
            backend frameworks(express), RESTful APIs and NoSQL DBs (Mongo DB).
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer" >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my pic"
            className="rounded-full sm:rounded-3xl max-w-md mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

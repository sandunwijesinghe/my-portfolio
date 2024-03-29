import React from "react";
import ecomApp from "../assets/portfolio/ecomApp.jpg";
import cryptoApp from "../assets/portfolio/cryptoApp.jpg";
import bookingCom from "../assets/portfolio/bookingCom.jpg";
import reduxShoppingCart from "../assets/portfolio/reduxShoppingCart.jpg";
import todoApp from "../assets/portfolio/todoApp.jpg";
import whatsappClone from "../assets/portfolio/whatsappClone.jpg";

const Portfolio = () => {
  const portfolos = [
    {
      id: 1,
      src: ecomApp,
      href:"https://github.com/sandunwijes/my-portfolio"
    },
    {
      id: 2,
      src: cryptoApp,
      href:"https://github.com/sandunwijes/my-portfolio"
    },
    {
      id: 3,
      src: bookingCom,
      href:"https://github.com/sandunwijes/my-portfolio"
    },
    {
      id: 4,
      src: reduxShoppingCart,
      href:"https://github.com/sandunwijes/my-portfolio"
    },
    {
      id: 5,
      src: todoApp,
      href:"https://github.com/sandunwijes/my-portfolio"
    },
    {
      id: 6,
      src: whatsappClone,
      href:"https://github.com/sandunwijes/my-portfolio"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-gray-300 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Projects
          </p>
          <p className="py-4">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolos.map(({ id, src, href }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold rounded" >
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold rounded">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

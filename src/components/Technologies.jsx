import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import firebase from "../assets/firebase.png";
import bitbucket from "../assets/bitbucket.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import materialui from "../assets/materialui.png";
import postman from "../assets/postman.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style:"shadow-orange-600"
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style:"shadow-blue-600"
    },
    {
      id: 3,
      src: javascript,
      name: "JavaScript",
      style:"shadow-yellow-600"
    },
    {
      id: 4,
      src: react,
      name: "ReactJS",
      style:"shadow-cyan-600"
    },
    {
      id: 5,
      src: node,
      name: "NodeJS",
      style:"shadow-green-600"
    },
    {
      id: 6,
      src: express,
      name: "ExpressJS",
      style:"shadow-gray-500"
    },
    {
      id: 7,
      src: mongo,
      name: "MongoDB",
      style:"shadow-green-700"
    },
    {
      id: 8,
      src: bootstrap,
      name: "Bootstrap",
      style:"shadow-purple-700"
    },
    {
      id: 9,
      src: materialui,
      name: "MaterialUI",
      style:"shadow-sky-600"
    },
    {
      id: 10,
      src: tailwind,
      name: "Tailwind",
      style:"shadow-sky-600"
    },
    {
      id: 11,
      src: github,
      name: "GitHub",
      style:"shadow-gray-600"
     
    },
    {
      id: 12,
      src: bitbucket,
      name: "Bitbucket",
      style:"shadow-blue-600"
    },
    {
      id: 13,
      src: postman,
      name: "Postman",
      style:"shadow-orange-600"
    },
    {
      id: 14,
      src: firebase,
      name: "Firebase",
      style:"shadow-orange-400"
    },
    {
        id: 15,
        src: redux,
        name: "Redux",
        style:"shadow-purple-600"
      },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, name, src, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

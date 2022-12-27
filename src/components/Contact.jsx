import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-gray-300"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/6e5674c6-b6dd-4f97-9a71-8c6cc16c9d6d" method="POST" className="flex flex-col w-full gap-y-3 md:w-2/3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Type message"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 focus:outline-none"
            ></textarea>
            <button className=" text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

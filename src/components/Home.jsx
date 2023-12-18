import React, { useEffect } from "react";
import { contactLinks } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import programmingGif from "../assets/Programming.gif";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    var textArray = ["Full Stack Developer"];
    var index = 0;
    var typingText = document.getElementById("typing-text");

    function type() {
      typingText.textContent = textArray[index];
      index++;
      if (index === textArray.length) {
        index = 0;
      }
    }

    const intervalId = setInterval(type, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means useEffect runs once after initial render

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div
        id="/"
        className="bg-white bg-center min-h-screen flex items-center justify-center"
      >
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-bold text-grey sm:text-5xl md:text-6xl">
              <span style={{ whiteSpace: "nowrap" }}>
                Hi, I am Sanjai Kannan G
              </span>
              <span className="block text-blue-600" id="typing-text"></span>
            </h1>
            <p className="mt-3 text-base text-grey sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Recent Information Technology graduate with a passion for web
              development, I am eager to kickstart my career as a Full Stack
              Developer.
            </p>
            <div className="flex md:justify-start">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  target="_blank" // Add this line to open link in a new tab
                  rel="noopener noreferrer" // Add this line for security best practices
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href="https://drive.google.com/file/d/1GrIVjpN-XdF536TbnIEMU80Ymj_v8eQU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={programmingGif}
            alt="Programming GIF"
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;

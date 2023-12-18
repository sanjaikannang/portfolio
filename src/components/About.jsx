import React from "react";
import { techStack } from "../constants";
import { motion } from "framer-motion";
import certificateImage from "../assets/stack overflow/GuviCertification - 3i2C6794399e8B315t (3).png";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-t from-blue-200 to-white min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-8">
          About Me
        </h2>

        <motion.div>
          <h4 className="text-3xl font-semibold text-blue-600 mb-4">
            A bit about me
          </h4>
          <p className="text-xl text-gray-700 mb-8">
            Recent Information Technology graduate with a passion for web
            development, I am eager to kickstart my career as a Full Stack
            Developer. I have a solid foundation in both front-end and back-end
            technologies. I am adept at problem-solving and collaborating within
            a team environment. Excited to bring my technical skills,
            creativity, and dedication to a dynamic development team, where I
            can contribute to the design and implementation of innovative
            solutions.
          </p>
        </motion.div>

        <motion.div>
          <h4 className="text-3xl font-semibold text-blue-600 mb-4">
            Education
          </h4>
          <div className="mb-6">
            <h5 className="text-xl  text-gray-800">
              PSG College Of Arts & Science, Bharathiar University
            </h5>
            <p className="text-xl text-gray-700">
              Bachelor of Science - Information Technology
            </p>
            <p className="text-xl  text-gray-700">
              Passed Out Year: 2023 | CGPA: 7.4
            </p>
          </div>
          {/* Add additional education entries as needed */}
        </motion.div>

        <motion.div>
          <h4 className="text-3xl font-semibold text-blue-600 mb-4">
            Technologies and Tools
          </h4>
        </motion.div>

        <motion.div className="flex flex-wrap mt-8 justify-between">
          {techStack.map((el, index) => (
            <motion.div
              key={index}
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
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
            >
              <img alt="" src={el.link} className="w-12" />
              <h4 className="text-md ml-4">{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
        <br />
        <br />
        <motion.div>
          <h4 className="text-3xl font-semibold text-blue-600 mb-4">
            Certification
          </h4>
          <p className="text-xl text-gray-700 mb-8">
            I Have Completed the " Zen Class Full Stack Developer Program ". In
            GUVI Geek Networks, IITM Research Park.
          </p>
          <br />

          <div className="mb-6">
            <motion.img
              src={certificateImage}
              alt="Guvi Certification"
              className="mx-auto mb-4"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

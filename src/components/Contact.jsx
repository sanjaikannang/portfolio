import React from "react";
import { contactLinks } from "../constants";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-t from-blue-200 to-white min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <br />
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <br />
        <div className="flex justify-between ">
          <div className="underline">
            <a href="mailto:sanjaikannang@gmail.com">
              Send me email directly by Click Me!
            </a>
          </div>
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
          <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
            <a
              href="https://drive.google.com/file/d/1GrIVjpN-XdF536TbnIEMU80Ymj_v8eQU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
          <h1 className="text-3xl font-bold">Email</h1>
          <a
            href="mailto:sanjaikannang@gmail.com"
            className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
          >
            sanjaikannang@gmail.com
          </a>
          <h1 className="text-3xl  font-bold">Address</h1>
          <a className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase">
            3/70,Kannan Kovil Street, <br /> Ambasamuthiram,
            <br /> Theni (Dt),
            <br />
            Tamil Nadu,
            <br />
            India
          </a>
          <h1 className="text-3xl  font-bold">Social</h1>
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
        </div>
        <div className="w-full bg-blue text-black text-lg py-3 flex justify-center md:mt-20">
          Made with
          <div className="text-red-500 px-2 text-2xl">&#10084;</div>
          by Sanjai Kannan G
        </div>
      </div>
    </div>
  );
};

export default Contact;

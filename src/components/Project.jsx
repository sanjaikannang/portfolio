// import React from "react";
// import { motion } from "framer-motion";
// import stackOverflowImage from "../assets/stack overflow/stack1.png";
// import noteWindImage from "../assets/stack overflow/Screenshot (126).png";
// import studentManagementSystemImage from "../assets/stack overflow/Screenshot (147).png";
// import realEstatesImage from "../assets/stack overflow/Screenshot (136).png";

// const Card = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-b from-blue-200 to-white min-h-screen py-12">
//         <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
//           <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
//             Projects
//           </h2>
//           <h4 className="mt-16 text-3xl font-semibold text-blue-600">
//             What I Built
//           </h4>
//           <div className="mt-8 flex justify-between items-stretch flex-wrap">
//             <motion.div
//               initial={"hidden"}
//               whileInView={"visible"}
//               variants={{
//                 visible: { opacity: 1 },
//                 hidden: { opacity: 0 },
//               }}
//               className="max-w-xl bg-white  border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
//             >
//               <div className="p-5">
//                 <img
//                   src={stackOverflowImage}
//                   alt="Stack Overflow Clone"
//                   className="mb-4 mx-auto"
//                 />
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Stack Overflow Clone
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Developed a web application, replicating the functionality of
//                   Stack Overflow using React.js, Node.js, Express, MongoDB
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Implemented user authentication, allowing users to register
//                   and log in.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Integrated a voting system for questions and answers to
//                   prioritize the most helpful content.{" "}
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Utilized RESTful API principles for efficient data retrieval
//                   and manipulation.{" "}
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={"hidden"}
//               whileInView={"visible"}
//               variants={{
//                 visible: { opacity: 1 },
//                 hidden: { opacity: 0 },
//               }}
//               className="max-w-xl bg-white  border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
//             >
//               <div className="p-5">
//                 <img
//                   src={noteWindImage}
//                   alt="noteWindImage"
//                   className="mb-4 mx-auto"
//                 />
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Note Wind - Note Making Application
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Designed and Developed " Note Wind ", a feature-rich
//                   note-making application, utilizing React.js, Node.js, Express,
//                   MongoDB.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Implemented user authentication, allowing users to register
//                   and log in.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Implemented a user-friendly interface allowing users to
//                   create, edit, and organize notes seamlessly.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Implemented robust search functionality and label to enhance
//                   note organization and retrieval.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={"hidden"}
//               whileInView={"visible"}
//               variants={{
//                 visible: { opacity: 1 },
//                 hidden: { opacity: 0 },
//               }}
//               className="max-w-xl bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
//             >
//               <div className="p-5">
//                 <img
//                   src={studentManagementSystemImage}
//                   alt="studentManagementSystemImage"
//                   className="mb-4 mx-auto"
//                 />
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Student Management System
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Conceptualized, designed, and implemented a comprehensive
//                   Student Management System, utilizing React.js, Node.js,
//                   Express, MongoDB.
//                 </p>

//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Implemented user authentication, allowing users to register
//                   and log in.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Developed features for student enrollment, course, batch, task
//                   score, assignment, attendance tracking, and project score.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Designed a responsive and intuitive user interface to enhance
//                   the user experience.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={"hidden"}
//               whileInView={"visible"}
//               variants={{
//                 visible: { opacity: 1 },
//                 hidden: { opacity: 0 },
//               }}
//               className="max-w-xl bg-white  border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
//             >
//               <div className="p-5">
//                 <img
//                   src={realEstatesImage}
//                   alt="realEstatesImage"
//                   className="mb-4 mx-auto"
//                 />
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   SK Real Estates
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Developed a comprehensive Real Estate application using the
//                   MERN stack MongoDB, Express.js, React.js, Node.js,MongoDB.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Implemented a secure user authentication system, enabling
//                   users to register accounts and log in securely.
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Designed an intuitive property listing system, empowering
//                   sellers to showcase their properties with rich multimedia
//                   content. Buyers can easily search for properties based on
//                   their criteria
//                 </p>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Employed RESTful API principles for efficient data retrieval
//                   and manipulation, establishing a seamless connection between
//                   the front-end and back-end components.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

import React from "react";
import { motion } from "framer-motion";
import stackOverflowImage from "../assets/stack overflow/stack1.png";
import noteWindImage from "../assets/stack overflow/Screenshot (126).png";
import studentManagementSystemImage from "../assets/stack overflow/Screenshot (147).png";
import realEstatesImage from "../assets/stack overflow/Screenshot (136).png";

const projects = [
  {
    image: stackOverflowImage,
    title: "Stack Overflow Clone",
    features: [
      "Developed a web application, replicating the functionality of Stack Overflow using React.js, Node.js, Express, MongoDB.",
      "Implemented user authentication.",
      "Integrated a voting system for questions and answers.",
      "Utilized RESTful API principles for efficient data retrieval and manipulation.",
    ],
    demoLink: "https://neon-kitsune-7d871e.netlify.app/",
    sourceCodeLink: "https://github.com/sanjaikannang/stackoverflow.git",
  },
  {
    image: noteWindImage,
    title: "Note Wind - Note Making Application",
    features: [
      "Designed and Developed Note Wind, a feature-rich note-making application, utilizing React.js, Node.js, Express, MongoDB.",
      "Implemented user authentication, allowing users to register and log in.",
      "Implemented a user-friendly interface allowing users to create, edit, and organize notes seamlessly.",
      "Implemented robust search functionality and label to enhance note organization and retrieval.",
    ],
    demoLink: "https://shimmering-cobbler-b07423.netlify.app/",
    sourceCodeLink: "https://github.com/sanjaikannang/NoteWind-Frontend.git",
  },
  {
    image: studentManagementSystemImage,
    title: "Student Management System",
    features: [
      "Conceptualized, designed, and implemented a comprehensive Student Management System, utilizing React.js, Node.js, Express, MongoDB.",
      "Implemented user authentication, allowing users to register and log in.",
      "Developed features for student enrollment, course, batch, task score, assignment, attendance tracking, and project score.",
      "Designed a responsive and intuitive user interface to enhance the user experience.",
    ],
    demoLink: "https://dainty-brigadeiros-306130.netlify.app/",
    sourceCodeLink: "https://github.com/sanjaikannang/Digelidge-Frontend.git",
  },
  {
    image: realEstatesImage,
    title: "SK Real Estates",
    features: [
      "Developed a comprehensive Real Estate application using the MERN stack MongoDB, Express.js, React.js, Node.js,MongoDB.",
      "Implemented a secure user authentication system, enabling users to register accounts and log in securely.",
      "Designed an intuitive property listing system, empowering sellers to showcase their properties with rich multimedia content. Buyers can easily search for properties based on their criteria.",
      "Employed RESTful API principles for efficient data retrieval and manipulation, establishing a seamless connection between the front-end and back-end components.",
    ],
    demoLink: "",
    sourceCodeLink: "",
  },
  // Add similar objects for other projects
];

const Card = () => {
  return (
    <>
      <div
        id="project-section"
        className="bg-gradient-to-b from-blue-200 to-white min-h-screen py-12"
      >
        <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
          <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
            Projects
          </h2>
          <h4 className="mt-16 text-3xl font-semibold text-blue-600">
            What I Built
          </h4>
          <div className="mt-8 flex justify-between items-stretch flex-wrap">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={"hidden"}
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                className="max-w-xl bg-white  border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
              >
                <div className="p-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 mx-auto"
                  />
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                  <ul className="mb-3 list-disc pl-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Demo Link
                    </a>
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

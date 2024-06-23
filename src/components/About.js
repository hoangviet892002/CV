import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Java from "../assets/java.png";
import JavaScript from "../assets/js.png";
import TypeScript from "../assets/ts.png";
import ReactImage from "../assets/reacrJS.jpg";
import ReactNative from "../assets/react-native.jpg";
import Node from "../assets/Nodejs.png";
import SpringBoot from "../assets/SpringBoot.webp";
import AndroidJava from "../assets/download.png";
import MongoDB from "../assets/mongooes.png";
import Firebase from "../assets/firebase.png";
import MySQL from "../assets/MySQL.png";
import Tailwind from "../assets/taidwind.png";
import MaterialUI from "../assets/Mui.png";
import AntDesign from "../assets/ant.png";
const About = () => {
  const technologies = [
    {
      name: "Java",
      image: Java,
      style: "shadow-blue-500",
    },
    {
      name: "JavaScript",
      image: JavaScript,
      style: "shadow-blue-500",
    },
    {
      name: "TypeScript",
      image: TypeScript,
      style: "shadow-blue-500",
    },
    {
      name: "ReactJS",
      image: ReactImage,
      style: "shadow-blue-500",
    },
    {
      name: "React Native",
      image: ReactNative,
      style: "shadow-blue-500",
    },
    {
      name: "Node",
      image: Node,
      style: "shadow-green-500",
    },
    {
      name: "Spring Boot",
      image: SpringBoot,
      style: "shadow-green-500",
    },
    {
      name: "Android Java",
      image: AndroidJava,
      style: "shadow-green-500",
    },
    {
      name: "MongoDB",
      image: MongoDB,
      style: "shadow-green-500",
    },
    {
      name: "Firebase",
      image: Firebase,
      style: "shadow-green-500",
    },
    {
      name: "MySQL",
      image: MySQL,
      style: "shadow-green-500",
    },
    {
      name: "Tailwind CSS",
      image: Tailwind,
      style: "shadow-yellow-500",
    },
    {
      name: "Material UI",
      image: MaterialUI,
      style: "shadow-yellow-500",
    },
    {
      name: "Ant Design",
      image: AntDesign,
      style: "shadow-yellow-500",
    },
  ];
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="about"
    >
      <div className="w-full container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            Experience
          </p>
          <p className="mb-6 text-[18px] lg:text-[24px] text-white/70">
            There are the technology I've worked with
          </p>
        </motion.div>
        <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full ">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {technologies.map((tech, index) => (
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={index}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
              >
                <img
                  src={tech.image}
                  alt="Avatar"
                  className="mx-auto rounded-lg"
                  style={{ width: "150px", height: "100px" }}
                />
                <p className="mt-4">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

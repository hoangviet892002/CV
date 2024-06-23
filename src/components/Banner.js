import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Hoang<span> Xuan Viet</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">{t("I AM A")}</span>
              <TypeAnimation
                sequence={["Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[18px] lg:text-[24px] text-white/70"
            >
              {t(
                "I am a developer with a passion for creating beautiful and functional websites and applications. I have experience in building web applications using modern technologies like React, Node, and MongoDB,..."
              )}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                className="btn btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/file/d/1zoknp51kLKF3GAGbylRfR8npQ6gD0G-4/view?usp=sharing"
                  );
                }}
              >
                {t("Contact me")}
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/file/d/1zoknp51kLKF3GAGbylRfR8npQ6gD0G-4/view?usp=sharing"
                  );
                }}
                className=" btn-link"
              >
                {" "}
                {t("My Profile")}{" "}
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/hoangviet892002">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100016126981477">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/vi%E1%BB%87t-ho%C3%A0ng-xu%C3%A2n-8681512a4/">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" className="rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

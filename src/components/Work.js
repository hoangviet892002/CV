import React from "react";
import caro from "../assets/caro.jpg";
import teraCandle from "../assets/TeraCandle.png";
import eFuniture from "../assets/eFuniture.png";
import BabyStore from "../assets/BabyStore.png";
import PetLove from "../assets/petLove.png";
import Game from "../assets/game.png";
import Clinic from "../assets/clinic.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Work = () => {
  const projects = [
    {
      title: "Caro Online",
      image: caro,
      frontend: [
        {
          tilte: "mobile",
          link: "https://github.com/trinhvinhphat2003/Caro-game",
        },
        {
          tilte: "web",
          link: "https://github.com/hoangviet892002/socketIOfrontend",
        },
      ],
      backend: [
        {
          tilte: "backend",
          link: "https://github.com/hoangviet892002/socketIObackend",
        },
      ],
    },
    {
      title: "Tera Candle",
      image: teraCandle,
      frontend: [
        {
          tilte: "frontend",
          link: "https://github.com/hoangviet892002/EXEfrontend",
        },
      ],
      backend: [
        {
          tilte: "backend",
          link: "https://github.com/NguyenDucAnh1908/eScentedCandle_project_BackEnd",
        },
      ],
    },
    {
      title: "E-Funiture",
      image: eFuniture,
      frontend: [
        {
          tilte: "mobile",
          link: "https://github.com/hoangviet892002/eFunitureMobile",
        },
        {
          tilte: "web",
          link: "https://github.com/hoangviet892002/admin-panel-eFuniture",
        },
      ],
      backend: [
        {
          tilte: "backend",
          link: "https://github.com/nguyenngocduy0401/eFurnitureProject",
        },
      ],
    },
    {
      title: "Baby Store",
      image: BabyStore,
      frontend: [
        {
          tilte: "mobile",
          link: "https://github.com/ngongo0108/Project-MMA",
        },
      ],
      backend: [
        {
          tilte: "backend",
          link: "https://github.com/hoangviet892002/MMABackend",
        },
      ],
    },
    {
      title: "Pet Love",
      image: PetLove,
      frontend: [
        {
          tilte: "source code",
          link: "https://github.com/Nhi230600/Pet_Project_Themes",
        },
      ],
      backend: [],
    },
    {
      title: "Shop Acc Game",
      image: Game,
      frontend: [
        {
          tilte: "frontend",
          link: "https://github.com/golgotha2003/frontend",
        },
      ],
      backend: [
        {
          tilte: "backend",
          link: "https://github.com/golgotha2003/backend",
        },
      ],
    },
    {
      title: "Booking App for the Dental Clinic ",
      image: Clinic,
      frontend: [
        {
          tilte: "frontend",
          link: "https://github.com/vuhaianh0907/backup-fe-localhost",
        },
      ],
      backend: [
        {
          tilte: "backend",
          link: "https://github.com/hoangviet892002/swpBackend",
        },
      ],
    },
  ];
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="work">
      <div className="container mx-auto">
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
        >
          Projects
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-6 text-[18px] lg:text-[24px] text-white/70"
        >
          There are the i have worked on my school
        </motion.p>

        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-col"
            >
              <h1>{project.title}</h1>
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform transform group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.frontend.map((item, index) => (
                    <a
                      href={item.link}
                      className="btn btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.tilte}
                    </a>
                  ))}
                  {project.backend.map((item, index) => (
                    <a
                      href={item.link}
                      className="btn btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.tilte}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

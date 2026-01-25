import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper  } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Desenvolvedor web focado em criar interfaces modernas, performáticas e
        bem estruturadas, unindo design, experiência do usuário e código limpo.
        <br />
        <br />
        Atuo principalmente com JavaScript, React, Node.js e APIs REST,
        desenvolvendo aplicações completas do front ao back. Tenho experiência
        prática com Three.js / React Three Fiber, criando experiências
        interativas em 3D, além de trabalhar com Docker, Linux e automações para
        tornar soluções mais eficientes e escaláveis.
        <br />
        <br />
        Tenho um olhar atento para UI/UX, performance e organização de projetos,
        sempre buscando escrever código legível, reutilizável e fácil de manter.
        Gosto de aprender novas tecnologias na prática e transformar ideias em
        produtos funcionais.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper ( About, "about");

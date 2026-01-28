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
        <h2 className={styles.sectionHeadText}>Resumo</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Desenvolvedor web focado na criação de interfaces modernas, performáticas e código limpo.

Atuo principalmente com JavaScript, TypeScript, React, Node.js e APIs REST, desenvolvendo aplicações completas do front-end ao back-end, com atenção à arquitetura, performance e escalabilidade. Possuo experiência prática com Three.js e React Three Fiber, criando experiências interativas em 3D para web.
        <br />
        <br />
Desenvolvi automações e integrações, incluindo soluções que atendem mais de 400 representantes comerciais via WhatsApp, além de projetos web com mais de 5 mil acessos mensais, atuando desde a interface até infraestrutura e deploy. Tenho vivência com Docker, Linux e DevOps, estruturando ambientes, pipelines e serviços para garantir estabilidade e eficiência.
        <br />
        <br />
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

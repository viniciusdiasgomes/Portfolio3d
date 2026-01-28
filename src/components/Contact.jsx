import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* LEFT */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <div className="mt-12 flex flex-col gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5561994227293"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary py-4 px-6 rounded-lg text-white font-medium
                       hover:bg-primary transition-all"
          >
            📱 WhatsApp — (61) 99422-7293
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vinicius-dias-019859310/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary py-4 px-6 rounded-lg text-white font-medium
                       hover:bg-primary transition-all"
          >
            💼 LinkedIn — Vinícius Dias
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/viniciusdiasgomes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary py-4 px-6 rounded-lg text-white font-medium
                       hover:bg-primary transition-all"
          >
            🧠 GitHub — @viniciusdiasgomes
          </a>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

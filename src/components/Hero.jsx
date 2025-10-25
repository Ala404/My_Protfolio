import { motion } from "framer-motion";

import { styles } from "../styles";
import { profilePic } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#42b883]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <h1 className="text-[#42b883]">Ala Eddine Kezzouz</h1>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An Inthuasthic web developer,
            <br />
            <span className="font-extrabold underline">Welcome</span> to my
            humble
            <span className="font-extrabold underline"> portfolio .</span>
          </p>
        </div>

        {/* Profile Picture */}
        <div className="hidden md:flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-[#42b883] shadow-2xl">
              <img
                src={profilePic}
                alt="Ala Eddine Kezzouz"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated ring around profile */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-t-4 border-[#42b883] opacity-50"
            />
          </motion.div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

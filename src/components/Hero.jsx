import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] brightness-[0.25]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to control video brightness/opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10 z-[-1]"></div>

      <div
        className={`absolute inset-0 top-[115px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abhay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate developer with hands-on experience in{" "}
            <br className="sm:block hidden" />
            building user-friendly web applications through personal projects.
          </p>
        </div>
      </div>

      <ComputersCanvas />

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

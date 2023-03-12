import { motion } from "framer-motion";
import { styles } from "../styles";
import { FishingCanvas, StarsCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <FishingCanvas/>
      <StarsCanvas/>

      <div className="absolute md:bottom-10 bottom-[10rem] w-full flex justify-center items-center">
        <a href="#about">
          <div className="sm:w-[28px] w-[18px] sm:h-[56px] h-[40px] rounded-3xl sm:border-4 border-2 border-white flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="sm:w-2 w-1 sm:h-3 h-1 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // 100vh
      behavior: "smooth",      // smooth scrolling
    });
    console.log("hi")
  };

  return (
    <section className={`relative w-full h-screen mx-auto flex justify-center items-center`}>
      <div className={`absolute inset-0 top-[100px] max-w-7xl !mx-auto !sm:px-16 !px-6 flex flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div> 
          <h1 className={`font-black text-white sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
            Hi, I'm <span className='text-[#915EFF]'>Vishnu</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            I develop User  Interfaces <br className='sm:block hidden' />
            and Web Applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div  className='z-10 absolute xs:bottom-5 bottom-7 w-full flex justify-center items-center cursor-pointer'>
          <div className='w-[20px] h-[38px] sm:w-[25px] sm:h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 bg-white rounded-full mb-1'
            />
          </div>
      </div>

    </section>
  );
};

export default Hero;
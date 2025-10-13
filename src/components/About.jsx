import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import SectionWrapper from "./SectionWrapper"
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";

const ServiceCard = ({ index, title, icon }) => (
  <div className='w-[250px]'>

    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  </div>

);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={" !sm:px-16 !px-6 sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider"}>Introduction</p>
        <h2 className={" !sm:px-16 !px-6 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='!sm:px-16 !px-6 mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Junior Web Developer with experience in 
        JavaScript, and frameworks like React, Node.js, REST APIs, and I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, responsive, dynamic web applications and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='!mt-20 !flex justify-center items-center !flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
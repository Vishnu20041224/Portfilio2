import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import { styles } from "../style";
import { github } from "../assets";
import SectionWrapper from "./SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' violet-gradient p-5 rounded-2xl sm:w-[360px] w-full !my-5'
      >
        <Link onClick={() => console.log("hello")} to={project_link} target="_blank" rel="noopener noreferrer">
          <div onClick={() => console.log("bye")} className='cursor-pointer relative w-full h-[230px] !my-4'>
            <img
              src={image}
              alt='project_image'
              className='  w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end !m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain cursor-pointer' />
              </div>
            </div>
          </div>
        </Link>

        <div className='!mt-5 !px-3'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-gray-500 text-[14px]'>{description}</p>
        </div>

        <div className='!mt-4 !p-2 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div >
  );
};

const Works = () => {
  return (
      <div className="!sm:px-16 !px-6 !mt-10 sm:mt-20">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gray-500`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className='w-full flex '>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='!mb-3 text-secondary text-[17px]  max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='!mx-auto flex flex-wrap gap-7 justify-center items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
  );
};

export default SectionWrapper(Works, "work");
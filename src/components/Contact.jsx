import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "./SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(form)

    emailjs
      .send(
        "service_rog7sds",
        "template_epekof6",
        // {
        //   from_name: form.name,
        //   title: "VS Portfilio",
        //   to_name: "Vishnu",
        //   from_email: form.email,
        //   email: "rhvishnushankar@gmail.com",
        //   message: form.message,
        // },
        {
          from_name: form.name,
          title: "VS Portfilio",
          from_email: form.email,      // ✅ correct
          message: form.message,
        },
        "rFwoyScnDdUuygMJm"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          console.log(form)
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (

    <div
      className={`sm:w-full !sm:px-26 !px-20 !mt-10 xl:mt-12 flex md:flex-row flex-col-reverse gap-10 overflow-hidden !justify-center !items-center`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] !bg-black-100 p-8 rounded-2xl'
      >
        <p className={"sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider"}>Get in touch</p>
        <h3 className={"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='!mt-4 !py-4 !px-6 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium !mb-4 !px-1 bg-tertiary '>Your Name :</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='!py-2 !px-1 placeholder:text-secondary text-white rounded-lg border outline-none border-gray-500 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium !mb-4 !px-1'>Your email :</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='!py-2 !px-1 placeholder:text-secondary text-white rounded-lg border border-b outline-none border-gray-500 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium !mb-4 !px-1'>Your Message :</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='!py-2 !px-1 placeholder:text-secondary text-white rounded-lg border outline-none border-gray-500 font-medium' //bg-gray placeholder:text-secondary text-white rounded-lg outline-none font-medium
            />
          </label>

          <button
            type='submit'
            className='bg-[#080c20]  !py-3 !px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto !md:h-[550px] sm:!h-[450px] !h-[350]'
      >
        <EarthCanvas />
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
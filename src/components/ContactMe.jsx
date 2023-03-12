import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { SkullCanvas } from './canvas';
import { HeadText } from "../components"

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Deyyy Zarul",
          from_email: form.email,
          to_email: "zarulpolo@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Arigato Gozaimasu. Will get back ASAP!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Shit happen. Please try again later.");
          console.log(error);
        }
      );
  };

  return (
    <div
      id='contact'
      className={`md:mt-12  flex md:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl"
      >
        <div className='w-fit'>
          <HeadText title="Contact"/>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8"
        >
          <label
            className='flex flex-col'
          >
            <span className='text-white font-nunito mb-4 font-semibold md:text-[1.2rem] text-[1rem]'>
              Your Name
            </span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="e.g: John Labu"
              className='bg-white2 py-4 px-6 placeholder:text-black2 text-green rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-nunito mb-4 font-semibold md:text-[1.2rem] text-[1rem]'
            >
              Your email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="e.g: noobmaster69@yahoo.com"
              className='bg-white2 py-4 px-6 placeholder:text-black2 text-green rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-nunito mb-4 font-semibold md:text-[1.2rem] text-[1rem]'
            >
              Your Message
            </span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="e.g: There's no such thing as talent or genius. There just happen to be people who got passionate in something."
              className='bg-white2 py-4 px-6 placeholder:text-black2 text-green rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-glass py-3 px-8 rounded-full outline-none w-fit text-white hover:text-green font-bold shadow-md shadow-black border-2 border-green'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[200px] md:w-[40%] w-full"
      >
        <SkullCanvas/>
      </motion.div>
    </div>
  )
}

export default ContactMe
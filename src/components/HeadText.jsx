import React from 'react';
import { motion } from "framer-motion";
import { textVariant } from '../utils/motion';


const HeadText = ({title}) => {
  return (
    <motion.div
      variants={textVariant()}
      className="border-b-2 border-green"
    >
      <h1 className='sm:text-[2rem] text-[1.5rem] uppercase font-semibold font-Nunito'>
        {title}
      </h1>
    </motion.div>
  )
}

export default HeadText
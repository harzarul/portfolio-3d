import React from 'react';
import { styles } from '../styles';
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { aboutMe } from '../constants';
import { HeadText } from "../components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AboutCard = ({about}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631"}}
      iconStyle={{background: "#000"}}
      icon={
        <div className='flex justify-center items-center w-full h-full rounded-full'>
          <img
            src={about.icon}
            alt="kedai emas"
            className='w-[60%] h-[60%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h1 className='text-[1.2rem] font-poppins font-bold capitalize text-green'>
          {about.title}
        </h1>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {about.points.map((point, index) => (
          <li
            key={point + index}
            className="text-[1rem] font-semibold"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const AboutMe = () => {
  return (
    <section id='about'
      className='md:pt-[4.2rem] pt-0'
    >
      <div className='flex justify-center items-center'>
        <HeadText title={"about me"}/>
      </div>

      <div className='mt-3 flex flex-col'>
        <VerticalTimeline>
          {aboutMe.map((about,index) => (
            <AboutCard
              key={`about-${index}`}
              about={about}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default SectionWrapper(AboutMe, "aboutme");
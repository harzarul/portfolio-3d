import React, { useState } from 'react';
import { projectsData } from '../constants';
import { HeadText } from "../components";

const ProjectCard = ({id, imgUrl, title, link, ps, active, handleClick}) => {
    return (
    <div className={`${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[1] flex-[2]'} flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex relative`}
        onClick={() => handleClick(id)}>
        <img className='absolute w-full h-full object-contain rounded-[24px]'
            src={imgUrl}
            alt={title} />
        
        {active !== id ? (
            <h3 className="font-semibold sm:h-auto h-[100%] sm:bg-transparent bg-black px-[2rem] py-[2px] text-green font-nunito sm:text-[26px] text-[18px] absolute z-0 lg:bottom-20 lg:rotate-[0deg] lg:origin-[0,0] cursor-pointer">
                {title}
            </h3>
        ) : (
            <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-black rounded-b-[24px]">
                <h1 className='font-nunito font-bold md:text-[2rem] text-[1.2rem]  text-white uppercase'>
                  {ps}
                </h1>
                <a
                  href={link}
                  target="_blank"
                  rel='noreferrer'
                >
                  <p className='mt-2 font-semibold font-poppins sm:text-[1.2rem] cursor-pointer capitalize text-green'>
                    live view
                  </p>
                </a>
            </div>
        )}
    </div>
  )
}


const Projects = () => {
  const [active, setActive] = useState("ebank");

  return (
    <section
      className='flex flex-col items-center justify-start my-[2rem]'
      id='projects'
    >
      <div className='mb-[2rem]'>
        <HeadText title={"projects"}/>
      </div>

      <div className='flex lg:flex-row flex-col min-h-[60vh] w-[80%] gap-5 mty-[2rem]'>
        {projectsData.map((data, index) => (
          <ProjectCard
            key={data.id + index}
            {...data}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiFillCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop > 100){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center justify-center fixed top-0 z-20 ${scrolled ? "sm:bg-black bg-transparent" : "bg-transparent"}`}>
      <div className='w-full flex justify-end items-center max-w-7xl mx-auto py-[1.2rem]'>
        <ul className='list-none hidden sm:flex  flex-row gap-12'>
          {navLinks.map((nav) => (
            <li key={nav.id}
              className={`${active === nav.title ? "text-green" : "text-white"} text-[1.4rem] font-medium cursor-pointer font-Nunito`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div className='w-[28px] h-[28px] object-contain'
            onClick={() =>  setToggle(!toggle)}>
            {toggle ? <AiFillCloseSquare className='w-[28px] h-[28px]'/> : <HiMenuAlt3 className='w-[28px] h-[28px]'/>}
          </div>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id}
                  className={`${active === nav.title ? "text-green" : "text-white"} text-[1.4rem] font-medium cursor-pointer font-Nunito`}
                  onClick={() => {
                    setActive(nav.title)
                    setToggle(false)
                  }}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
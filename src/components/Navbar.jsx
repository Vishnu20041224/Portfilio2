import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import { styles } from "../style"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { li } from 'framer-motion/client'

const Navbar = () => {

  let [active, setActive] = useState()
  let [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className={`sm:px-16 !px-6  w-full flex items-center justify-center py-5 fixed top-0 z-20 bg-[#050816]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto !py-3'>
        <Link to={"/"} className='flex items-center gap-2' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <img className='w-8 h-8 object-contain flex' src={logo} alt="logo" />
          <p className='text-white text-lg font-bold cursor-pointer'>Vishnu <span className='hidden sm:inline-block'> &nbsp;| &nbsp; Frontend Developer </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) =>
            <li key={item.id}
              className={`${active === item.title ? "text-white" : "text-gray-500"} hover:text-white text-lg font-medium cursor-pointer`}
              onClick={() => {
                setActive(item.title)
              }}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>)}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img className='w-[24px] h-[24px] object-contain cursor-pointer' onClick={() => setMenuOpen(!menuOpen)} src={menuOpen ? close : menu} alt="menu" />

          <div className={`${!menuOpen ? "hidden" : "flex"} !p-4 black-gradient absolute top-12 right-3 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4 justify-end align-start'>
              {navLinks.map((item) =>
                <li key={item.id}
                  className={`${active === item.title ? "text-white" : "text-gray-500"} hover:text-white text-base font-medium cursor-pointer font-poppins`}
                  onClick={() => {
                    setActive(item.title)
                    setMenuOpen(!menuOpen)
                  }}
                >
                  <a className='py-2 px-3' href={`#${item.id}`}>{item.title}</a>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Links = () => {
    return(
    <div className='flex md:flex-row flex-col md:gap-9 align-top items-end'>
        <Link to="/gallery">Gallery</Link>
        <Link to="/films">Films</Link>
        <Link to="/about">About</Link>
        <Link to="/contactMe">Contact Me</Link>
        
        
        
    </div>
    )
} 

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className='w-full  p-[1.5em] '>
      <div className='flex flex-row justify-between mx-10 mt-3 text-LightGreyFont text-sm'>
        <Link to="/">MasonLePhotography</Link>
        <div className='hidden md:flex flex-row'>
          
          <Links className=''></Links>
        </div>
        <div className='md:hidden'>
          <button onClick={toggle}> {isOpen ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars"></i>}</button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <Links></Links>
        </div>
      )}
  
    </div>
    
  )
}


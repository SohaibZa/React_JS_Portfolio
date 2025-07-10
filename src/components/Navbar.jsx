import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  //Sroll Functions
   const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }}

  const toggleNavbar =()=> {
    SetIsOpen(prev =>!prev)
  }

  return (
    <>

      <div className=' text-xl font-bold text-white md:hidden absolute left-2 top-3'>
        <button onClick={toggleNavbar}><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <nav id='Navbar'  className={`w-60 h-screen justify-between md:flex fixed  flex-col gap-8 ${isOpen? 'flex': 'hidden'}  bg-black text-neutral-50 pl-2`}>
        <div className=' h-2 w-3 text-xl absolute md:hidden cursor-pointer right-2'>
        <button onClick={toggleNavbar}>  <FontAwesomeIcon icon={faXmark} /></button>
        </div>
        <div>
          <h1 className='font-bold text-2xl  pt-20 cursor-pointer'>Sohaib.</h1> 
          <div className='sleekLine ml-0 w-full h-1'>
          </div>
        </div>
        <div >
          <ul className='flex flex-col font-sans h-[430px] gap-12 text-xl' >
            <li onClick={()=>{handleScroll('Hero');toggleNavbar()}} className='NavBtn'>Home</li>
            <li onClick={()=>{handleScroll('Stack');toggleNavbar()}} className='NavBtn'>Skills & Experience</li>
            <li onClick={()=>{handleScroll('Projects');toggleNavbar()}} className='NavBtn'>Projects</li>
            <li onClick={()=>{handleScroll('Contact');toggleNavbar()}} className='NavBtn'>Contact</li>
          </ul>
        </div>
        <div className=' text-white text-xl mb-3 flex gap-3 cursor-pointer justify-center w-full h-5 '>
          <a href="https://web.facebook.com/profile.php?id=100014765442893"><span><i id='fb' className="fa-brands fa-facebook"></i></span></a>
          <a href="https://www.instagram.com/sohaib_zaman1/"><span><i id='in' className="fa-brands fa-instagram"></i></span></a>
          <a href="https://www.linkedin.com/in/sohaib-baloch-7672ab325/"><span><i id='li' className="fa-brands fa-linkedin"></i></span></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React from 'react'
import DevImg from '../assets/dev-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div id='hero' className='flex items-center lg:gap-10 md:gap-6 h-auto sm:h-screen'>
          <div id='styleElements' className='absolute right-[10vw] top-[4vh] '>
            <h1 className=' animate-pulse z-20 text-[10vw]'>✨</h1>
          </div>
          <div id='styleElements' className='absolute left-[45vw] bottom-[10vh] sm:bottom-10 '>
            <h1 className=' animate-pulse text-[35px]'>✨</h1>
          </div>
        <div id='HeroTextDiv' className='text-[35px] md:pl-12  flex justify-center flex-col text-white h-[600px]
        w-[519px]'>
            <h1 className='text-[2.5em] cursor-pointer font-extrabold'>MY NAME <br/> IS SOHAIB <br/> <span id='zaman' className='text-transparent'>ZAMAN</span></h1>
            <p className='text-[0.8em] font-bold text-left w-full'>React Js Devloper <span className="font-light">based in</span> PAK</p>
            <p className='text-[0.6em]' ><FontAwesomeIcon icon={faEnvelope} className=' mr-1'/>abc@gmail.com</p>
            <p className='text-[0.6em]'><FontAwesomeIcon icon={faPhone} className='mr-1'/>+92 323 3529708</p>
        </div>
        <div id='HeroImgDiv' className='justify-center cursor-pointer hidden lg:flex items-center h-auto' >
            <img className='w-[450px]' src={DevImg} alt="DevImg" />
        </div>
      
    </div>
  )
}

export default Hero

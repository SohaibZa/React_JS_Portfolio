import React from 'react'
import P_img from '../assets/P-img.jpg'

const Projects = () => {
  return (
    <div className='text-[30px] flex flex-wrap bg-myGradient3 text-white mt-12 sm:mt-20 w-auto h-auto'>
        <h1 className='text-center w-full sm:text-[2em] font-bold cursor-pointer'>-My Work-</h1>
        <h1 id='work_line' className=' text-[1em] font-thin italic ml-2 '>See What I have done...</h1>
        <div id='Card_container' className='flex flex-wrap justify-center sm:px-20 pt-10  h-auto w-auto gap-12'>

      <div id='Project_Card' className=' Project_Card w-[300px] bg-gray-300 text-black rounded h-auto ' >
            <img src={P_img} className='h-[250px] w-[300px] cursor-pointer rounded' alt="" />
            <p className='text-[0.5em] font-sans px-1 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sit aspernatur qui ut dolorum quia!</p>
            <button className='font-semibold animated-btn p-2 text-[0.5em] w-full bg-black rounded text-white'>Live Preview</button>
      </div>
      <div id='Project_Card' className=' Project_Card w-[300px] bg-gray-300 text-black rounded h-auto ' >
            <img src={P_img} className='h-[250px] w-[300px] cursor-pointer rounded' alt="" />
            <p className='text-[0.5em] font-sans px-1 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sit aspernatur qui ut dolorum quia!</p>
            <button className='font-semibold animated-btn p-2 text-[0.5em] w-full bg-black rounded text-white'>Live Preview</button>
      </div>
      <div id='Project_Card' className=' Project_Card w-[300px] bg-gray-300 text-black rounded h-auto ' >
            <img src={P_img} className='h-[250px] w-[300px] cursor-pointer rounded' alt="" />
            <p className='text-[0.5em] font-sans px-1 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sit aspernatur qui ut dolorum quia!</p>
            <button className='font-semibold animated-btn p-2 text-[0.5em] w-full bg-black rounded text-white'>Live Preview</button>
      </div>
     
      
 
      </div>    
    </div>
  )
}

export default Projects

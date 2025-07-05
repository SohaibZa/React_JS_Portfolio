import React from 'react'

const StackAndExp = () => {
  return (
    <div id='stack' className='h-auto  text-[15px] sm:text-[30px] text-white   w-auto  flex flex-col  mt-10 pt-10'>
      <div className=''><h1 className='text-center text-[2em] my-8 font-bold font-sans cursor-pointer'>-Stack & Experience-</h1></div>
      <div className="StackTxt flex flex-col sm:flex-row   text-[14px] sm:text-[24px]  "  >
      <div  className='text-[1.2em]  ml-2 cursor-text  gap-2 sm:w-[50%]  sm:border-r-2 sm:border-b-0 border-b-2 text-code'>
      <span className='font-bold'>Frontend: </span> <br/>                  
      HTML, CSS, JS , REACT JS, TAILWIND CSS <br/>
      <span className='font-bold'>Tools:</span><br/>
      FIGMA, VS CODE<br/>
      <span className='font-bold'>Have beginner knowledge of:</span><br/>
      NODE JS,MONGO DB,EXPRESS <br/>
      <span className='font-bold'>Currently learning:</span><br/>
      NEXT JS
        <br/></div>
      <div  className='  text-[1.2em] ml-2 sm:w-[50%]  text-code'>
       <span className='font-bold '> Expirence:</span><br/>
        <span>Fresher, Self Employeed</span>
      </div>
    </div>
    <a className='text-center' href='./src/cv.txt' download ><button className='font-semibold mt-2  sm:text-[0.8em] text-[0.3em] animated-btn rounded  text-center'>Get CV</button></a>
      </div>
  )
}

export default StackAndExp

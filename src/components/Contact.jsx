import React from 'react'

const Contact = () => {
  return (
    <> <div id='contact' className='text-[30px] font-pop h-auto text-white '>
    <h1 className='text-center font-sans font-semibold text-[1em] cursor-pointer  sm:text-[2.5em]'>-Lets Talk!-</h1> 
      <div className=' flex flex-col sm:flex-row py-2'>
      <div id='Img_Div' className='sm:flex  w-[100%] sm:w-[50%] justify-center'>
        <h1 className='sm:text-[1em] text-[0.5em] font-sans p-4 w-[100%] mt-4'>Whether you have an idea, a project, or just want to say hello — I'm always open to meaningful conversations. Feel free to reach out using the form or through my social channels. I aim to respond promptly and look forward to exploring how we can team up or create something impressive together.</h1>
      </div>
      <div id='Form_Div' className='h-auto text-black  flex rounded-lg items-center justify-center'>
        <form id='Contact_Form' className='flex flex-col cursor-pointer h-auto rounded bg-myGradient4 gap-2 sm:px-20  px-2 py-8 sm:py-20 sm:w-[35vw]  w-[80vw] text-[30px]'>
              <input className='border text-[0.4em] sm:text-[0.6em] py-3 px-8  rounded w-[100%]' placeholder='Your Name' type="text" required />
                <input className='border text-[0.4em] sm:text-[0.6em] py-3 px-8  rounded w-[100%]' placeholder='Your Email' type="email" required />
            <textarea className='border text-[0.4em] sm:text-[0.6em] w-[100%] rounded h-[200px] py-2 px-8' placeholder='Your Message' type="text" required />
            <button className=' text-base sm:text-xl rounded animated-btn p-2'>Send Message</button>
        </form> 
      </div> 
    </div>
    </div>
    </>

  )
}

export default Contact

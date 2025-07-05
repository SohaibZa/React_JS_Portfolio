import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StackAndExp from './components/StackAndExp'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <div className='flex'>
        <div className='md:w-60'>
          <Navbar />
        </div>
        <div className="h-auto flex-1">
         <div id='Hero'><Hero/></div>
         <div id='Stack'><StackAndExp/></div>
         <div id='Projects'><Projects/></div>
         <div id='Contact'> <Contact/></div> 
         <Footer/>
        </div>
      </div>
      
    </>
  )
}

export default App

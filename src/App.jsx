import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feacture from './Components/Feacture'
import  Workflow  from './Components/Workflow'
import {Price}   from './Components/Price';
import Testimonial from './Components/testimonial'
import Footter from './Components/Footter'


function App() {
  return (
   <>
   <Navbar />
   <div className='max-w-7xl mx-auto pt-20 px-6'>
   <Hero/>
   <Feacture/>
   <Workflow/>
   <Price/>
   <Testimonial/>
   <Footter/>
   </div>

  
   </>
  )
}

export default App
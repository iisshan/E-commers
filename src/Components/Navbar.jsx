
import {Menu , X} from "lucide-react";
import { useState } from "react";

import React from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';

const Navbar = () => {
    const [mobile , setmobile] = useState(false);
    const toggleNavbarr = () =>{
        setmobile(!mobile)
    }

   let phoned ; 
   if(mobile){
    phoned = <X/>
   }else{
    phoned = <Menu/>
   }

  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className='container px-4 mx-auto relative text-sm '>
        <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0'>
                <img className='h-10 w-10 mr-2'  src= {logo} alt="" />
                <span className='text-xl tracking-tight'>IshanCart</span>

            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
                {navItems.map((items,index) =>(
                    <li key={index}>
                        <a href={items.href}>{items.label}</a>
                    </li>

                ))
                
                
                }
                <li><a  className="bg-gradient-to-l from-green-200 to-green-500 text-transparent bg-clip-text" href="https://www.linkedin.com/in/ishan-kashyap-5b83a120a/">Linkedin</a></li>
                
                <li><a  className="bg-gradient-to-l from-red-200 to-red-500 text-transparent bg-clip-text" href="https://github.com/iisshan">github</a> </li>
               
                

            </ul>
            <div className='hidden lg:flex justify-center space-x-12 items-center '>
                <a  className='hover:bg-gradient-to-r from-green-400 to-green-900   py-2 px-3 border rounded-md ml-1 '  href="#" >Sign In</a>
            </div>
            <div className='hidden lg:flex justify-center space-x-12 items-center '>
                <a  className='hover:bg-gradient-to-r from-orange-300 to-orange-800   py-2 px-3 border rounded-md ml-1'  href="#" >Create Account</a>
            </div>
            <div className="lg:hidden  md:flex flex-col justify-center"> 
                <button onClick={toggleNavbarr}> 
                    {phoned}
                    
                </button>
            </div>

        </div>
        {mobile  && (
            <div className=" lg:hidden right-0  text-xl z-20  p-12 w-full flex flex-col justify-center items-center bg-neutral-900">
                <ul>

                <li className="hover:bg-slate-400 py-4"><a  href="https://www.linkedin.com/in/ishan-kashyap-5b83a120a/">Linkedin</a></li>
                
                <li className="hover:bg-slate-400 py-4"><a   href="https://github.com/iisshan">github</a> </li>

                <li className=" py-4"><a href="# " className="py-4">gallery </a></li>
                
                <li className=" py-4"><a href="#" className="py-4">shop now</a> </li>
              
                
               
                </ul>
                <div className='lg:hidden  flex justify-center space-x-12 items-center '>
                <a  className='hover:bg-gradient-to-r from-green-400 to-green-900   py-2 px-3 border rounded-md ml-1 '  href="#" >Sign In</a>
                  <a  className='hover:bg-gradient-to-r from-orange-300 to-orange-800   py-2 px-3 border rounded-md ml-1'  href="#" >Create Account</a>
            </div>
            
              
        
            </div>
        )}  

    </div>

   </nav>
   
  )
}

export default Navbar
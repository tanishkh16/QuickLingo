import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='fixed z-10 top-0 w-full flex justify-between bg-gradient-to-l from-sky-400 to-cyan-300'> 
       <div className="my-4 mx-7 -mb-2">
<Link to="/"><img src="QuickLingo.png" className=" h-16 w-48  text-slate-50"></img></Link>

    </div>
    <div>
      <nav className="">
        <ul className="flex justify-end px-10">
          <li className="my-8 mx-4  cursor-pointer  text-base hover:text-cyan-300 font-serif text-slate-50 hover:underline">
          <a href="#home">Home</a></li>
          <li className=" my-8 mx-4 cursor-pointer text-base hover:text-cyan-300 font-serif text-slate-50 hover:underline">
          <a href="#feature">Feature</a></li>
          <li className=" my-8 mx-4 cursor-pointer text-base hover:text-cyan-300 font-serif text-slate-50 hover:underline">
         <a href="#articles">Articles</a></li>
          <li className=" my-8 mx-4 cursor-pointer text-base hover:text-cyan-300 font-serif text-slate-50 hover:underline">
          <a href="#faqs">Faqs</a></li>
          {/* <li className=" my-8 mx-4 cursor-pointer text-base hover:text-cyan-300 font-serif text-slate-50 hover:underline">
          <a href="#contact">Contact Us</a></li> */}
        </ul>
      </nav>
  
      </div>
      
    </div>
  )
}

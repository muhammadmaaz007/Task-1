import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='flex bg-slate-600 justify-between px-8 py-3 '>
       <img src=".\src\assets\m4ax.ae.jpg" alt="Logo"  className=' rounded-full w-11'/>
        <ul className='flex gap-7 mt-2'>
            <li><Link to="/about" >About </Link></li>
            <li><Link to="/contact" >Contact Us </Link></li>
            <li><Link to="/home" >Home </Link></li>
        </ul>

        <Button name = "Login"/>
       
       </div>
  
    </nav>
  )
}

export default Navbar
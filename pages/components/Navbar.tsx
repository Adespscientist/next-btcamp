import Image from 'next/image'
import React from 'react'
import {FaHamburger} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    
    <div className="text-6xl font-semibold space-x-6">AIQ</div>
    <div className="flex space-x-8 justify-between">
      <li className="headerLink">Home</li>
      <li className="headerLink">About</li>
      <li className="headerLink">Bootcamp</li>
      <li className="headerLink">FAQ</li>
      <button>Register</button>
      <FaHamburger className="hidden md:flex lg:flex"/>
    </div>
    </>
  )
}

export default Navbar
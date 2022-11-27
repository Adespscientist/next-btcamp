import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {FaHamburger} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    <header className="flex">
    <div className="text-4xl font-bold md:ml-20">
      AIQ
     </div>
     <div className="hidden md:flex space-x-8">
      <Link href="/"><li className="headerLink">Home</li></Link>
      <li className="headerLink">About</li>
      <li className="headerLink">Bootcamp</li>
      <li className="headerLink">FAQ</li>
     </div>
     <div>
     <Link href="/login"> <button type="button" className="localbtn">Register</button>
     </Link>
     </div>
     </header>
    </>
  )
}

export default Navbar
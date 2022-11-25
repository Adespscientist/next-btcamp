import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {FaHamburger} from 'react-icons/fa'

const Navbar = () => {
  const[isClicked, setIsClicked] = useState(false)

  useEffect(() => {
      const handleClick = () =>{
        
      }
  })
  return (
    <>
    <div className="navLink">
    <div className="text-6xl font-semibold space-x-6">AIQ</div>
    <div className="flex space-x-8 justify-between">
      <li className="headerLink">Home</li>
      <li className="headerLink">About</li>
      <li className="headerLink">Bootcamp</li>
      <Link href={''}/>
      <li className="headerLink">FAQ</li>
      
    </div>
    </div>
    <button className="regButton">Register</button>
      <FaHamburger className="iconMenu"/>
    </>
  )
}

export default Navbar
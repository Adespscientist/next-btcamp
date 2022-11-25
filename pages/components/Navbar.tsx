import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
     
    <header>
      <div className="container flex items-center space-x-2 md:space-10">
        <div className="logo" >AIQ</div>
        <ul className="space-x-4 flex">
          <li className="HeaderLink">Home</li>
          <li className="HeaderLink">About</li>
          <li className="HeaderLink">Bootcamp</li>
          <li className="HeaderLink">Contact us</li>
        </ul>
        </div>
      <div className="flex items-center space-x-4 font-light">
          <button type="button" className="btn btButton">Register</button>
      </div>

      </header>
       


        </div>
  )
}

export default Navbar
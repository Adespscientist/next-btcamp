import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center space-x-2 md:space-10">
        <div className="logo" >AIQ</div>
        </div>
      <div className="hidden nav-2 w-100 md:flex items-center space-x-8 md:space-10 ">
      <ul className="space-x-4 flex">
          <li className="HeaderLink">Home</li>
          <li className="HeaderLink">About</li>
          <li className="HeaderLink">Bootcamp</li>
          <li className="HeaderLink">Contact us</li>
        </ul>
      
      <div className="flex items-center space-x-4 font-light">
          <button type="button" className="btn btButton">Register</button>
      </div>
     
      </div>
      </header>
  )
}

export default Navbar
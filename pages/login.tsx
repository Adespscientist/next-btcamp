import React from 'react'
import Files from './components/Files'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'

function login() {
  return (
    <>
      <Navbar/>
    <div className='flex justify-center space-x-2 mx-8 md:mx-6'>
    <Files/>
    <Login />
    
    </div>
    <Footer/>
  
    </>
  )
}

export default login
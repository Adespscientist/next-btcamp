import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from './components/Content'
import Navbar from './components/Navbar'
import asset from '.././public/asset.png'
import Roles from './components/Roles'
import Footer from './components/Footer'




const Home: NextPage = () => {
  return (
    <>
     <Navbar/>
     <Content/>
     <Roles/>
     <Footer/>
    </>
  )
}

export default Home



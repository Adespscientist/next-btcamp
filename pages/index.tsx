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
      <header className="flex space-x-6 justify-between">
        <Navbar />
      </header>
      <div className=" flex space-x-2 top-0">
        <div className="flex-col ">
        </div>
        <section>
          <Content />
        </section>
        <div className="flex-col  hidden md:flex -z-10 w-[100%]">
          <img className="mr-20" src="https://github.com/Adespscientist/next-btcamp/blob/main/public/hero%201.png?raw=true" />
        </div>

      </div>

      <Roles />
      <Footer />
    </>
  )
}

export default Home

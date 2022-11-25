import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from './components/Content'
import Navbar from './components/Navbar'
import asset from '.././public/asset.png'




const Home: NextPage = () => {
  return (
    <>
      <div className=" flex space-x-6 justify-between top-0">
        <div>
          <header className="flex space-x-6 justify-between">
            <Navbar/>
          </header>
          </div>
          <div className="hidden md:flex">
        <img src="https://github.com/Adespscientist/next-btcamp/blob/main/public/hero%201.png?raw=true"/>
      </div>
      </div>
    </>
  )
}

export default Home

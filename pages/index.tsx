import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from './components/Content'
import Navbar from './components/Navbar'




const Home: NextPage = () => {
  return (
     <div>
        <div className="relative mx-0 top-0 mr-auto flex justify-end">
        <Image src="https://github.com/Adespscientist/next-btcamp/blob/main/public/asset.png?raw=true" className="imageBanner"
        width={100} height={100}alt=""/>
        </div>
      <header>
      {/* Navbar Here */}
      <Navbar/>
      </header>
      {/* Section Here */}
      <section>
        <Content/>
      </section>
     </div>
  ) 
} 

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from './components/Content'
import Navbar from './components/Navbar'




const Home: NextPage = () => {
  return (
     <div>
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

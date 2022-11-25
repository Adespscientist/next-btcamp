import Image from 'next/image'
import React from 'react'
import asset from '../../public/asset1.png'

const Content = () => {

  return (
    <>
      <section className="flex justify-center ">
        {/* Content div */}
        <div className="text-center lg:text-left lg:ml-24 lg:mt-10 p-2 m-4"> 
          <section className="px-2">
          <h3 className="text-2xl lg:text-4xl">Join Nigeria’s first</h3>
          <h2 className="text-3xl lg:text-8xl md:text-4xl font-bold text-[#000000]">Space Xploration
            bootcamp 1.0</h2>
          <div className="spanTag font-bold">Powered by AIQ.ng
          </div>
        </section>
        <section className="sectionContent font-semibold">
                <p>Education is fundamental for the future of space exploration  in Nigeria . We are proud to
                    announce that in 2023 we would be hosting Nigeria’s first Space Exploration Bootcamp.
                    The program is open for the emerging professionals in space technology, Gis/remote
                    sensing, data analysis and software engineering .</p>
            </section>
            <div>
            </div>
        </div>
        
        {/* Image div */}
        <div className="hidden lg:flex mr-10 md:w-[100%]">
          <img src="https://github.com/Adespscientist/next-btcamp/blob/main/public/hero%201.png?raw=true" alt=""/>
        </div>
      </section>
    </>
  )
}

export default Content
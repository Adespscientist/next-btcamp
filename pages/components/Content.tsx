import Image from 'next/image'
import React from 'react'
import asset from '../../public/asset.png'

const Content = () => {

  return (
    <>
      <div className="mx-6 py-6 top-50  md:ml-40 lg:ml-40 items-center justify-center space-y-5">
        <div className="w-[100%] justify-center space-y-5">
          <p className="text-2xl md:text-4xl lg:text-4xl font-semibold">Join Nigerian's First</p>
          <p className="text-4xl font-bold md:text-4xl lg:text-8xl">Space Xploration bootcamp 1.0</p>
          <p className="text-1xl md:text-2xl lg:text-2xl font-light ">Powered by AIQ.ng</p>
          <div>
            <p className="text-1xl md:text-2xl lg:text-2xl font-light">Education is fundamental for the future of space exploration  in Nigeria . We are proud to
              announce that in 2023 we would be hosting Nigeria’s first Space Exploration Bootcamp.
              The program is open for the emerging professionals in space technology, Gis/remote
              sensing, data analysis and software engineering .
            </p>
          </div>
        </div>
       
       
      </div>

    </>
  )
}

export default Content
import React from 'react'

function Roles() {
    return (
        <>
            <section className="p-20 mx-6  text-black">
                <div className="flex-col  md:flex-row lg:flex items-center justify-between">
                    <div className="container  mr-10">
                        <img src="https://c4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-preview.jpg" alt="" />
                    </div>
                    <div className="text-center ">
                        <p className="lg:text-[26px] my-5 ">
                        60+ intensive days of Space Education with 10+ leading experts from Space and defence
                        agencies, universities, and Space companies. The curriculum includes extensive lectures
                        and workshops on Space infrastructure technology, Spatio-temporal data
                        exploitation,machine learning, Space Science and Exploration, and more.
                        </p>
                        
                    <p className="font-bold text-[#346bc5]  text-[18px] my-4">Don’t miss a chance of a lifetime!
                    </p>
                    <button className="localbtn my-4">Register</button>
                    <p className="font-semibold">Apply Now (limited spaces available)</p>
                    <div>
                </div>
                    </div>
                </div>
               
            </section>
            <section className="flex-row lg:flex ml-10 items-center">
                <div className="p-4 m-4 lg:text-[40px]">Roles
                <div className="flex list-none">
                    <li className="listStuff">GIS/Remote sensing professional
                    </li>
                    <li className="listStuff">Software engineers</li>
                    <li className="listStuff"> Data Scientistic
                    </li>
                </div></div>
               
                <section className="lastSec">
                <div>At the end of this program, participants will have been exposed to the
                    rudiment of how satellites are built and deployed and how data gotten from
                    space can be leveraged for defense and intelligence purposes among other
                    benefits to the nation.
                </div>
                <div>Kindly note: This program is a physical Bootcamp and it will be hosted at
                    AIQ’s Headquarters in Abuja, Nigeria. Applicants from across Nigeria and
                    even other African countries are welcomed to apply but only selected
                    applicants will participate.
                </div>
            </section>
            </section>
           
        </>
    )
}

export default Roles
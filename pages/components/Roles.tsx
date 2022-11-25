import React from 'react'

function Roles() {
    return (
        <>
            <section className=" ml-10 flex justify-between space-x-6 content">
                <div className="">
                    <img className="flexImg" src="" alt="" />
                </div>
                <div className="space-y-10">60+ intensive days of Space Education with 10+ leading experts from Space and defence
                    agencies, universities, and Space companies. The curriculum includes extensive lectures
                    and workshops on Space infrastructure technology, Spatio-temporal data
                    exploitation,machine learning, Space Science and Exploration, and more.
                    <p className="font-bold text-[#4155c6]">Don't miss a chance of a lifetime!</p>
                    <button className="regButton">Register</button>
                    <p className="font-bold">Apply Now (limited spaces available)
                    </p>
                </div>
            </section>

            <div>
                <>
                    <div className="flex  justify-center">
                        <div className=" items-center gap-40 justify-center my-6 mx-6 space-y-10">
                            <div className="w-[800px]">At the end of this program, participants will have been exposed to the
                                rudiment of how satellites are built and deployed and how data gotten from
                                space can be leveraged for defense and intelligence purposes among other
                                benefits to the nation.
                            </div>
                            <div className="w-[800px]">Kindly note: This program is a physical Bootcamp and it will be hosted at
                                AIQ’s Headquarters in Abuja, Nigeria. Applicants from across Nigeria and
                                even other African countries are welcomed to apply but only selected
                                applicants will participate.

                            </div>
                        </div>
                        {/* <h3 className="text-4xl font-bold">Roles</h3> */}
                        <div className=" items-center gap-40 justify-center my-6 mx-6">
                            <div className="role"> GIS/Remote sensing professional
                            </div>
                            <div className="role">Software engineers</div>
                            <div className="role">Data Scientistic
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default Roles
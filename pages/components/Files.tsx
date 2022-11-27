import React from "react";

function Files() {
  return (
    <div>
      <div className="bg-[#e4e1e1] relative h-[80vh] hidden lg:flex text-center text-[#2d2d2d] p-4 m-4 shadow-lg">
        <section className="mt-[8rem]">
          <p className="text-[#170e2d] font-bold lg:text-[1.5rem] text-center">
            Application form 
          </p>
          <p className="text-[#22113c] font-bold lg:text-[3rem] text-center">SPACE Exploration Bootcamp Application</p>
          <p className="text-[20px] font-semibold">
            Hello there,
            <br />
            Thank you for indicating interest to be a part of the Space
            Exploration Bootcamp 2023.
          </p>
          <p className="font-[500] text-[18px]">
            Kindly fill the application form below. Application Deadline:<br/>
            <p className="text-[#3b4eca]">21st November 2022 (Mid.night )</p>
          </p>
          <p className="text-[18px] font-[500]">
            Selected applicants will recieve an email between the 22nd to 25th
            of Novemeber 2022 inviting them htmlFor an Interview.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Files;

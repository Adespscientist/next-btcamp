import React from "react";

import $ from "jquery";

import previous from "../../public/arrow-left-grey.png";
import check from "../../public/check.png";
import Image from "next/image";
function Login() {
    var number1=1
    var number2=10
  if (typeof window !== "undefined") {
    $(document).ready(function () {
      "use strict";

      var currentStep = $(".current-step").html();
      var totalStep = $(".total-step").html();
        
      function checkStep() {
        if (currentStep == totalStep) {
          $(".step-count").addClass("final-step");
        } else if (currentStep > totalStep) {
          $(".covid-header").addClass("no-step");
          $(".step-count").removeClass("final-step");
        } else {
          $(".step-count").removeClass("final-step");
          $(".covid-header").removeClass("no-step");
        }
      }

      $(".test-step .button").on("click", function (e) {
        e.preventDefault();

        // number1++;
        $(".current-step").html(currentStep);
        checkStep();

        $(this).parents(".test-step").next().addClass("active");
        $(this).parents(".test-step").removeClass("active");
      });

      $(".test-step .prev-btn").on("click", function (e) {
        e.preventDefault();

        // number1--;
        $(".current-step").html(currentStep);
        checkStep();

        $(this).parents(".test-step").prev().addClass("active");
        $(this).parents(".test-step").removeClass("active");
      });
    });
  }
  return (
    <>
      <div className=" w-full text-center flex-row md:flex items-center mx-2">
       

        <div className=" lg:w-[70%] lg:-mr-[20rem]">
          <section className="lg:ml-60 md:mx-auto md:ml-20">
            <div className="covid-header space-x-4">
              <h2 className="">Bootcamp Registration</h2>
              <span className="step-count">
                <span className="current-step"></span>
                <span className="total-step"></span>
              </span>
            </div>

            <form action="#">
              <div className="covid-test-wrap test-step asign-info active w-[100%]">
                <p>Kindly fill the application form below. </p>

                <div className="step-block">
                  <div className="row">
                    <div className="">
                      <div className="column-4 htmlForm-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lastname"
                          required
                        />
                      </div>
                      <div className="column-4 htmlForm-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Firstname"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="htmlForm-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="htmlForm-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="htmlForm-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Address"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="button">Next</button>
                 
                </div>
              </div>

              <div className="text-left covid-test-wrap test-step ">
                <p>Upload CV</p>
                <div className="step-block">
                  <div className="form-groups">
                    <input type="file" name="cv" id="" />
                  </div>
                  <div className="form-groups">
                    <p>Upload Cover Letter</p>
                    <input type="file" name="letter" id="" />
                  </div>

                  <div className="form-group">
                    <p>Which role are you applying for (Select one)</p>
                    <div className="select-input">
                      {/* <span></span> */}
                      <select className="form-control" name="role">
                        <option
                          value="GIS and Remote sensing Expert">
                          GIS and Remote sensing Expert
                        </option>
                        <option value="Software engineer">
                          Software engineer
                        </option>
                        <option value="Data Analyst">
                          Data Analyst
                        </option>
                      </select>
                    </div>
                  </div>

                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={20} height={20} />
                    Previous
                  </a>
                </div>
              </div>
              
              {/* <!  -Question 1--> */}
              <div className="text-left covid-test-wrap test-step ">
                <p>Kindly tell us more about your professional background?</p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question1"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                 
                  <div className="form-group">
                    <p>What inspired you to pursue a career in your field ?</p>
                    <textarea
                      placeholder=""
                      name="question2"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={20} height={20} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question 1 End--> */}
              {/* <!  -Question 2 End--> */}
              <div className="covid-test-wrap test-step ">
                <p>Why have you decided to apply for this program?</p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question3"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                 
                  <div className="form-group">
                    <p>
                      What are your thoughts about the Future of Space
                      exploration in Nigeria?
                    </p>
                    <textarea
                      placeholder=""
                      name="question4"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question 2 End--> */}
              {/* <!  -Question 3 End--> */}
              <div className="covid-test-wrap test-step ">
                <p>
                  What recent innovative concepts in the industry do you think
                  are significant to address?
                </p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question5"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                 
                  <div className="form-group">
                    <p>
                      Can you briefly tell us about your favorite project worked
                      on so far?
                    </p>
                    <textarea
                      placeholder=""
                      name="question6"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question3 End--> */}
              {/* <!  -Question4 End--> */}
              <div className="covid-test-wrap test-step ">
                <p>
                  How much experience do you have in leading or collaborating in
                  projects?
                </p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question7"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                 
                  <div className="form-group">
                    <p>How do you make sure you meet important deadlines?</p>
                    <textarea
                      placeholder=""
                      name="question8"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>

                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question4 End--> */}
              {/* <!  -Question5 End--> */}
              <div className="covid-test-wrap test-step ">
                <p>
                  According to you, what is more crucial- completing a task on
                  time, or doing it in the right way?
                </p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question10"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <p>How do you handle work pressure?</p>
                    <textarea
                      placeholder=""
                      name="question9"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question5 End--> */}
              {/* <!  -Question6 End--> */}
              <div className="covid-test-wrap test-step ">
                <p>What makes you great team player?</p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question13"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                 
                  <div className="form-group">
                    <p>How do you influence people and inspire actions</p>
                    <textarea
                      placeholder=""
                      name="question14"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>

                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question6 End--> */}

              {/* <!  -Question6 End--> */}
              <div className="covid-test-wrap test-step ">
                <p>According to you, what other skills is needed for the role?</p>
                <div className="step-block">
                  <div className="form-group">
                    <textarea
                      placeholder=""
                      name="question13"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <p>
                      Can you tell us more about your accomplishments in your
                      field?
                    </p>
                    <textarea
                      placeholder=""
                      name="question15"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <a href="#" className="button">
                    Next
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Previous
                  </a>
                </div>
              </div>
              {/* <!  -Question6 End--> */}

              {/* <!  -Question6 End--> */}
              <div className="text-left covid-test-wrap test-step ">
                <p>How did you get to hear about this program</p>
                <div className="step-block">
                  <div className="form-groups">
                    <input
                      type="radio"
                    
                      className="form-control"
                      id="no1"
                    />
                    <label htmlFor="no1">Facebook</label>
                  </div>
                  <div className="form-groups">
                    <input
                      type="radio"
                    
                      className="form-control"
                      id="no2"
                    />
                    <label htmlFor="no2">Instagram</label>
                  </div>
                  <div className="form-groups">
                    <input
                      type="radio"
                    
                      className="form-control"
                      id="no3"
                    />
                    <label htmlFor="no3">Twitter</label>
                  </div>
                  <div className="form-groups">
                    <input
                      type="radio"
                    
                      className="form-control"
                      id="no4"
                    />
                    <label htmlFor="no4">Youtube</label>
                  </div>
                  <div className="form-groups">
                    <input
                      type="radio"
                    
                      className="form-control"
                      id="no5"
                    />
                    <label htmlFor="no5">Radio</label>
                  </div>
                  <div className="form-groups">
                    <input
                      type="radio"
                    
                      className="form-control"
                      id="no6"
                    />
                    <label htmlFor="no6">Through a friend</label>
                  </div>
                 
                  <div className="form-group">
                    <p>Why should we consider you for this program?</p>
                    <textarea
                      placeholder=""
                      name="consider"
                      id="comment_text"
                      className="ui-autocomplete-input form-control"
                      autoComplete="off"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                    ></textarea>
                  </div>
                  <a href="#" className="button">
                    Submit
                  </a>
                  <a href="#" className="prev-btn">
                    <Image src={previous} alt="" width={22} height={22} />
                    Go back
                  </a>
                </div>
              </div>
              {/* <!  -Question6 End--> */}

              <div className="justify-center text-center covid-test-wrap test-step thankyou-sec">
                <div className="flex justify-center test-progress">
                  <Image
                    src={check}
                    className="fluid"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="text-[1.5rem]">Congratulations!!</h2>
                <p>
                  Your application has been recieved, thank you for applying. If
                  your skills, experience and professional background is a
                  considerable match for this program you will be contacted for
                  an interview via the contact details provided
                </p>

                <a href="#" className="prev-btn">
                  <Image src={previous} alt="" width={22} height={22} />
                  Previous
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;

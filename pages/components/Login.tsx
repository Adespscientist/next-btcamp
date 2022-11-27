import React from 'react'

import $ from 'jquery'

import previous from '../../public/arrow-left-grey.png'
import check from '../../public/check.png'
import Image from 'next/image';
function Login() {
    if (typeof window !== 'undefined') {
        $(document).ready(function () {
            'use strict';

            var currentStep = $('.current-step').html();
            var totalStep = $('.total-step').html();

            function checkStep() {

                if (currentStep == totalStep) {
                    $('.step-count').addClass('final-step');

                } else if (currentStep > totalStep) {
                    $('.covid-header').addClass('no-step');
                    $('.step-count').removeClass('final-step');

                } else {
                    $('.step-count').removeClass('final-step');
                    $('.covid-header').removeClass('no-step');
                }

            }

            $('.test-step .button').on('click', function (e) {
                e.preventDefault();

                currentStep++;
                $('.current-step').html(currentStep);
                checkStep();

                $(this).parents('.test-step').next().addClass('active');
                $(this).parents('.test-step').removeClass('active');

            })

            $('.test-step .prev-btn').on('click', function (e) {

                e.preventDefault();

                currentStep--;
                $('.current-step').html(currentStep);
                checkStep();

                $(this).parents('.test-step').prev().addClass('active');
                $(this).parents('.test-step').removeClass('active');

            })

        })
    }
    return (
        <>
            <div className=" text-center flex-row md:flex space-x-4 items-center justify-center mx-4 space-x-10 py-5">
                <div className="relative lg:-ml-[25rem]">
                    <section>
                        <p>Application htmlForm
                            SPACE Exploration Bootcamp
                            Application
                        </p>
                        <p>Hello there,
                            Thank you htmlFor indicating interest to be a part of the Space Exploration Bootcamp 2023.
                        </p>
                        <p> Kindly fill the application htmlForm below.
                            Application Deadline: 21st November 2022  (Mid.night )
                        </p>
                        <p> Selected applicants will recieve an email between the 22nd to 25th of Novemeber 2022 inviting them htmlFor an Interview.
                        </p>
                    </section>
                </div>



                <div className="relative w-full lg:w-[500px] -mr-[25rem]">
                    <section>
                        <div className="covid-header space-x-4">
                            <h2>Bootcamp Registration</h2>
                            <span className="step-count"><span className="current-step">1</span>/<span className="total-step">9</span></span>
                        </div>

                        <form action="#">

                            <div className="covid-test-wrap test-step asign-info active">
                                <p>Kindly fill the application form below. </p>

                                <div className="step-block">
                                    <div className="row">
                                        <div className="">
                                            <div className="column-4 htmlForm-group">

                                                <input type="text" className="form-control" placeholder="Lastname" required />
                                            </div>
                                            <div className="column-4 htmlForm-group">
                                                <input type="text" className="form-control" placeholder="Firstname" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="htmlForm-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="htmlForm-group">
                                                <input type="email" className="form-control" placeholder="Email" required />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="htmlForm-group">
                                                <input type="text" className="form-control" placeholder="Full Address" />
                                            </div>
                                        </div>
                                    </div>

                                    <button className="button">Next</button>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={20} height={20} />Previous</a>
                                </div>
                            </div>


                            <div className="text-left covid-test-wrap test-step ">
                                <p>Upload CV
                                </p>
                                <div className="step-block">
                                    <div className="form-groups">
                                        <input type="file" name="cv" id="" />
                                    </div>
                                    <div className="form-groups">
                                        <p>Upload Cover Letter
                                        </p>
                                        <input type="file" name="letter" id="" />
                                    </div>

                                    <div className="form-groups">
                                        <p>Which role are you applying for (Select one)
                                        </p>
                                        <div className="select-input">
                                            <span></span>
                                            <select className="form-control" name="role">

                                                <option value="GIS and Remote sensing Expert" name="role1">GIS and Remote sensing Expert</option>
                                                <option value="Software engineer" name="role2">Software engineer</option>
                                                <option value="Data Analyst" name="role3">Data Analyst</option>

                                            </select>
                                        </div>

                                    </div>
                                    <a href="#" className="button">Next</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={20} height={20} />Previous</a>
                                </div>
                            </div>
                            {/* <!  -Question 1--> */}
                            <div className="text-left covid-test-wrap test-step ">
                                <p>Kindly tell us more about your professional background?
                                </p>
                                <div className="step-block">
                                    <div className="form-group">
                                        <textarea placeholder="" rows="20" name="question1" id="comment_text"
                                            cols="40" class="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <p>What inspired you to pursue a career in your field ?
                                        </p>
                                        <textarea placeholder="" rows="20" name="question2" id="comment_text"
                                            cols="40" class="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>

                                    </div>
                                    <a href="#" className="button">Next</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={20} height={20} />Previous</a>
                                </div>
                            </div>
                            {/* <!  -Question 1 End--> */}
                            {/* <!  -Question 2 End--> */}
                            <div className="covid-test-wrap test-step ">
                                <p>Why have you decided to apply for this program?

                                </p>
                                <div className="step-block">
                                    <div className="form-group">
                                        <textarea placeholder="" rows="20" name="question3" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <p>What are your thoughts about the Future of Space exploration in Nigeria?
                                        </p>
                                        <textarea placeholder="" rows="20" name="question4" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <a href="#" className="button">Next</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                                </div>
                            </div>
                            {/* <!  -Question 2 End--> */}
                            {/* <!  -Question 3 End--> */}
                            <div className="covid-test-wrap test-step ">
                                <p>What recent innovative concepts in the industry do you think are significant to address?

                                </p>
                                <div className="step-block">
                                    <div className="form-group">
                                        <textarea placeholder="" rows="20" name="question5" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <p>Can you briefly tell us about your favorite project worked on so far?

                                        </p>
                                        <textarea placeholder="" rows="20" name="question6" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <a href="#" className="button">Next</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                                </div>
                            </div>
                            {/* <!  -Question3 End--> */}
                            {/* <!  -Question4 End--> */}
                            <div className="covid-test-wrap test-step ">
                                <p>How much experience do you have in leading or collaborating in projects?


                                </p>
                                <div className="step-block">
                                    <div className="form-group">
                                        <textarea placeholder="" rows="20" name="question7" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <p>How do you make sure you meet important deadlines?

                                        </p>
                                        <textarea placeholder="" rows="20" name="question8" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>

                                    <div className="form-group">
                                        <p>How much experience do you have in leading or collaborating in projects

                                        </p>
                                        <textarea placeholder="" rows="20" name="question9" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <a href="#" className="button">Next</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                                </div>
                            </div>
                            {/* <!  -Question4 End--> */}
 {/* <!  -Question5 End--> */}
                            <div className="covid-test-wrap test-step ">
                                <p>According to you, what is more crucial- completing a task on time, or doing it in the right way?


                                </p>
                                <div className="step-block">
                                    <div className="form-group">
                                        <textarea placeholder="" rows="20" name="question10" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <p>How do you handle work pressure?


                                        </p>
                                        <textarea placeholder="" rows="20" name="question11" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <p>What makes you great team player?


                                        </p>
                                        <textarea placeholder="" rows="20" name="question12" id="comment_text"
                                            cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                                    </div>
                                    <a href="#" className="button">Next</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                                </div>
                            </div>
                             {/* <!  -Question5 End--> */}
                             {/* <!  -Question6 End--> */}
                             <div className="covid-test-wrap test-step ">
                    <p>How do you influence people and inspire actions
                    </p>
                    <div className="step-block">
                      <div className="form-group">
                        <textarea placeholder="" rows="20" name="question13" id="comment_text"
                        cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                            </div>
                        <br/>
                        <div className="form-group">
                        <p>According to you, what other skills is needed for the role?



                        </p>
                        <textarea placeholder="" rows="20" name="question14" id="comment_text"
                        cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                        </div>
                        <div className="form-group">
                        <p>Can you tell us more about your accomplishments in your field?


                        </p>
                        <textarea placeholder="" rows="20" name="question15" id="comment_text"
                        cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                        </div>
                                    <a href="#" className="button">See Result</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                                </div>
                            </div>
{/* <!  -Question6 End--> */}
{/* <!  -Question6 End--> */}
 <div className="covid-test-wrap test-step ">
                    <p>How did you get to hear about this program
                    </p>
                    <div className="step-block">
                      <div className="form-group"  name="about">
                        <input type="radio" name="about" className="form-control" id="no1"/>
                        <label  htmlFor="no1">Facebook</label>
                      </div>
                      <div className="form-group" name="about">
                        <input type="radio" name="about" className="form-control" id="no2"/>
                        <label  htmlFor="no2">Instagram</label>
                      </div>
                      <div className="form-group" name="about">
                        <input type="radio" name="about" className="form-control" id="no3"/>
                        <label  htmlFor="no3">Twitter</label>
                      </div>
                      <div className="form-group" name="about">
                        <input type="radio" name="about" className="form-control" id="no4"/>
                        <label  htmlFor="no4">Youtube</label>
                      </div>
                      <div className="form-group" name="about">
                        <input type="radio" name="about" className="form-control" id="no5"/>
                        <label htmlFor="no5">Radio</label>
                      </div>
                      <div className="form-group" name="about">
                        <input type="radio" name="about" className="form-control" id="no6"/>
                        <label htmlFor="no6">Through a friend</label>
                      </div>
                        <br/>
                        <div className="form-group">
                        <p>Why should we consider you for this program?
                        </p>
                        <textarea placeholder="" rows="20" name="consider" id="comment_text"
                        cols="40" className="ui-autocomplete-input form-control" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
                        </div>
                        <a href="#" className="button">See Result</a>
                                    <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                                </div>
                            </div>
{/* <!  -Question6 End--> */}
                            <div className="covid-test-wrap test-step thankyou-sec">
                                <div className="test-progress">
                                    <Image src={check} className="Image-fluid" alt="" width={100} height={100} />
                                </div>
                                <p>Thank you htmlFor submission</p>
                                <p>Don’t be afried, Our telemedical team also give you proper guideline</p>
                                <h4>Stay Home &nbsp; &nbsp;<span className="line">&#73;</span> &nbsp; &nbsp; Stay Safe</h4>
                                <a href="#" className="prev-btn"><Image src={previous} alt="" width={22} height={22} />Previous</a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

        </>

    )
}

export default Login
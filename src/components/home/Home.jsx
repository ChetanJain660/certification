import React from 'react'
import './home.css';
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <section class="header">

                <div class="text-box">
                    <h1 style={{ marginTop: "250px" }}>Alchemy Training Certification</h1>
                    <br></br>
                    {/* <p style={{ margin: "70px" }}>
                        Established in the year 2014, Alchemy Techsol delivers a complete suite of disruptive technologies that bring about true transformation - industry-pioneering Infrastructure Managed Services powered by AI, Machine Learning and Deep Learning; Information Security and Digital Engineering. </p> */}

                </div>

            </section>



            <section class="course">
                <h2>Popular Certifications</h2>
                {/* <p>Lorem ipsum dolor sit  veritatis velit, cum necessitatibus blanditiis.</p> */}
                <div class="row">
                    <div class="course-col">
                        <h5>AWS Certified Cloud Practitioner Certification</h5>
                        <p>This credential helps organizations identify and develop talent with critical knowledge related to implementing cloud initiatives.</p><br></br>
                        <h4>Rs 6,210.00</h4>
                        <Link to="details">
                            <button className='topheader11'>Enroll Now</button>
                        </Link>
                    </div>
                    <div class="course-col">
                        <h5>Associate Cloud Engineer Certification</h5>
                        <p>Associate Cloud Engineers deploy apps, monitor operations, & manage enterprise solutions. Learn about the certification & prepare for the exam.</p>
                        <h4>Rs 7,000.00</h4>
                        <Link to="details">
                            <button className='topheader11'>Enroll Now</button>
                        </Link>
                    </div>
                    <div class="course-col">
                        <h5>Microsoft Certified: Azure Fundamentals</h5>
                        <br />

                        <p>The certification validates your basic knowledge of cloud services and how those services are provided with Azure. </p>
                        <h4>Rs 6,500.00</h4>
                        <Link to="details">
                            <button className='topheader11'>Enroll Now</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* <section class="campus">
                <h2>Our Global Campus</h2>
                <p>Lorem ipsum dolor sit  veritatis velit, cum necessitatibus blanditiis.</p>
                <div class="row">
                    <div class="campus-col">
                        <img src="https://www.google.com/maps/vt/data=4jbePPsrBjzsK8UJFKi6pFrZxnXiUuCl0kyU_rNYTviDy0x640PgnpPHt4f0WidXqFEm6G9g-rcvNBTPRWOjxnJD5P04XEJMw2ykLXWCJ80POCKreKzDUZX30PPrkHraTg33f5aJL_C6ZpskEDxEvygXIamkCgqjv9ExBVPi17NZgl2MRf39" height="95%" />
                        <div class="layer">
                            <h3>BANGALORE</h3>
                        </div>
                    </div>

                </div>
            </section> */}



            <section class="testinomial">
                <h2>What Our Student Says</h2>
                {/* <p>Lorem ipsum dolor sit  veritatis velit, cum necessitatibus blanditiis.</p> */}
                <div class="row">
                    <div class="testinomial-col">
                        <img src="https://media.istockphoto.com/photos/handsome-bearded-young-businessman-using-laptop-at-workplace-picture-id1059550972?k=20&m=1059550972&s=612x612&w=0&h=dDs7OB40Ci4nEOMwNZJRTapPV7Xsqd2q-jyostptQA4=" />
                        <div>
                            <p>This course was short but very informative and very helpful for an aspiring leader like myself. It also helped me understand how to view or understand when I receive feedback. I highly recommend it!!</p>
                            <h3>Chetan</h3>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>

                        </div>
                    </div>
                    <div class="testinomial-col">
                        <img src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <div>
                            <p>I enjoyed the course and learned a lot from it. The content is well organised and focused on practical situations. I particularly enjoyed the bits of psychological research shared in the content.</p>
                            <h3>Dayanand</h3>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>

            </section>


{/* 
            <section class="footer">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicusantium corrupti rerum quod officia consequuntur.<br /> electus atque qui vel minus numquam commodi unde laudantium.</p>
                <div className='aboutaa'>
                    <div className='homeabout'><i class="fa-brands fa-facebook"></i></div>
                    <div className='homeabout'><i class="fa-brands fa-twitter"></i></div>
                    <div className='homeabout'> <i class="fa-brands fa-instagram"></i></div>
                    <div className='homeabout'>  <i class="fa-brands fa-linkedin"></i></div>
                </div>
            </section>
            <script src="https://use.fontawesome.com/0f4bd21158.js"></script> */}


        </>
    )
}

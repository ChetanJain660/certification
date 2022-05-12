import React from 'react'
import "./receipt.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Receipt() {

    const diffToast = () => {
        toast("reciept sent to your email", {
            position: "top-center"
        })

    }

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">
                    <div className="receipt bg-white p-3 rounded">

                        <div className='receiptheader'>
                            <span></span>
                            {/* <span className='logo'>Alchemy Solutions</span> */}
                            <h4 className="mt-2 mb-3">Your Payment is confirmed!</h4>
                            <h6 className="name">Hello xyz,</h6>
                            {/* <span className="fs-12 text-black-50">your Training has been confirmed</span> */}

                        </div>

                        <div className='receipthdb'>

                            <div className='cccc'>
                                <button onClick={diffToast} className='submit'>Email</button>
                                <ToastContainer />
                            </div>

                            <div className='receiptprint'>
                                <button className='submit'>Print</button>
                            </div>

                        </div>

                    </div>

                    <div className='wwww'>

                        <hr />
                        <div className="d-flex flex-row justify-content-between align-items-center order-details">
                            <div>
                                <span className="d-block fs-12">Date of activiation</span>
                                <span className="font-weight-bold">12 April 2022</span>
                            </div>

                            <div>
                                <span className="d-block fs-12">Id number</span>
                                <span className="font-weight-bold">OD44434324</span>
                            </div>

                            <div>
                                <span className="d-block fs-12">Payment method</span>
                                <span className="font-weight-bold">Credit card</span>
                                {/* <img className="ml-1 mb-1" src="https://i.imgur.com/ZZr3Yqj.png" width="20" /> */}
                            </div>

                            <div>
                                <span className="d-block fs-12">Timg of classNamees</span>
                                <span className="font-weight-bold text-success">10:30 AM</span>
                            </div>

                        </div>

                        <hr />
                        <div className="d-flex justify-content-between align-items-center product-details">
                            <div className="d-flex flex-row product-name-image">
                                <img className="rounded" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" width="80" />
                                <div className="d-flex flex-column justify-content-between ml-2">

                                    <div>
                                        <span className="d-block font-weight-bold p-name"> AWS Certified Cloud Practitioner Certification</span>
                                        <span className="fs-12"></span>
                                    </div>
                                    
                                    <span className="fs-12">month: 3</span>
                                </div>

                            </div>

                            <div className="product-price">
                                <h5>Rs. 6,210/-</h5>
                            </div>

                        </div>

                        {/* <div className="d-flex justify-content-between align-items-center product-details">

                            <div className="d-flex flex-row product-name-image">
                                <img className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCJreUGOMTzEFA2JWZzcf5o60g95Lcv_9Ig&usqp=CAU" width="80" />
                                <div className="d-flex flex-column justify-content-between ml-2">
                                    <div>
                                        <span className="d-block font-weight-bold p-name">Overview of Managed PostgreSQL with Amazon RDS and Aurora</span>
                                        <span className="fs-12"></span>
                                    </div>
                                        <span className="fs-12">month: 3</span>
                                </div>
                            </div>

                            <div className="product-price">
                                <h6>Rs. 19,888/-</h6>
                            </div>
                        </div> */}

                        <div className="mt-5 amount row">

                            <div className="d-flex justify-content-center col-md-6">
                                <img src="https://i.imgur.com/AXdWCWr.gif" width="250" height="100" />
                            </div>

                            <div className="col-md-6">

                                <div className="billing">

                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal</span><span className="font-weight-bold">6,210</span>
                                    </div>

                                    {/* <div className="d-flex justify-content-between mt-2">
                                        <span>Tax</span>
                                        <span className="font-weight-bold">1155</span>
                                    </div> */}

                                    {/* <div className="d-flex justify-content-between mt-2">
                                        <span className="text-success">Discount</span>
                                        <span className="font-weight-bold text-success">2250</span>
                                    </div> */}
                                    <hr />
                                    <div className="d-flex justify-content-between mt-1">
                                        <span className="font-weight-bold">Total</span>
                                        <span className="font-weight-bold text-success">6,210</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* <span className="d-block">Expire date</span>
                        <span className="font-weight-bold text-success">12 jun 2022</span>
                        <span className="d-block mt-3 text-black-50 fs-15"></span> */}

                        <hr />

                        <div className="d-flex justify-content-between align-items-center footer">
                            <div className="thanks">
                                <span className="d-block font-weight-bold">Thank you</span>
                                <span>Alchemy team</span>
                            </div>

                            <div className="d-flex flex-column justify-content-end align-items-end">
                                <span className="d-block font-weight-bold">Need Help?</span>
                                <span>Call - 974493933</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Receipt;
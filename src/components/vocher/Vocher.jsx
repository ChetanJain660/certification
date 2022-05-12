import React from 'react'
import "./vocher.css"
import { Link } from "react-router-dom"

function Vocher() {
    return (
        <div className='vochercont'>
            <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="p-3 bg-white rounded">

                            <div className="rowheader">

                                <div className="col-md-6">
                                    <h2 className="text-uppercase">Vocher</h2>
                                    <div className="billed"><span className="font-weight-bold text-uppercase">Billed:</span><span className="ml-1"> xyz</span></div>
                                    <div className="billed"><span className="font-weight-bold text-uppercase">Date:</span><span className="ml-1">apr 13, 2022</span></div>
                                    <div className="billed"><span className="font-weight-bold text-uppercase">Order ID:</span><span className="ml-1">#1345345</span></div>
                                </div>

                                <div className="col-md-6 text-right mt-3" style={{ margin: "90px" }}>
                                    <h4 className="text-primary mb-0" >Alchemy Solutions </h4><span>xyz@alechmy.com</span>
                                </div>

                            </div>

                            <div className="mt-3">

                                <div className="table-responsive">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Course</th>
                                                <th>Duration</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>
                                                <td> AWS Certified Cloud Practitioner Certification </td>
                                                <td>3 Month</td>
                                                <td>Rs. 6,210/-</td>
                                                <td>6,210/-</td>
                                            </tr>

                                            {/* <tr>
                                                <td>Practitioner. Certified Cloud Practitioner.</td>
                                                <td>3 Months</td>
                                                <td> Rs. 6888/-</td>
                                                <td> Rs. 6888/-</td>
                                            </tr>

                                            <tr>
                                                <td>MERN Stack Develope</td>
                                                <td>3 Months</td>
                                                <td> Rs. 24,237/-</td>
                                                <td> Rs. 24,237/-</td>
                                            </tr>

                                            <tr>
                                                <td>Overview of Managed PostgreSQL with Amazon RDS and Aurora</td>
                                                <td>3 Months</td>
                                                <td> Rs. 19,888/-</td>
                                                <td> Rs. 19,888/-</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td>56,888</td>
                                            </tr> */}

                                        </tbody>
                                    </table>

                                </div>

                            </div>

                            <div className='vocherbutton'>

                                <div className="text-right mb-3">
                                    <Link to="/payment">
                                        <button className="topheader11" type="button" >Pay Now</button>
                                    </Link>
                                </div>
                                <br></br><br></br>

                                <div className="text-left mb-3">
                                    <Link to="/details">
                                        <button className="topheader11" type="button">IBM PO</button>
                                    </Link>
                                </div>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Vocher
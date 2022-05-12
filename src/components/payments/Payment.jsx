import React from 'react';
import "./payment.css"
import { Link } from 'react-router-dom'

function Payment() {
    return (
        <div className="containerpay">
            <h3 className="text-center">Payment Details</h3>


            <div className="row1">

                <div className="col-xs-12 col-md-6 col-md-offset-4">

                    <div className="panel panel-default">

                        <div className="panel-heading">

                            <div className="row">

                                <div className="inlineimage">
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png" />
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png" />
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png" />
                                    <img className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png" />
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group"> <label>CARD NUMBER</label>
                                            <div className="input-group"> <input type="tel" className="form-control" placeholder="Valid Card Number" /> <span className="input-group-addon"><span className="fa fa-credit-card"></span></span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group"> <label><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline" >EXP</span> DATE</label> <input type="tel" style={{ width: "100%" }} className="form-control" placeholder="MM / YY" /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group"> <label>CV CODE</label> <input type="tel" className="form-control" placeholder="CVC" style={{ width: "100%" }} /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="form-group"> <label>CARD OWNER</label> <input type="text" className="form-control" placeholder="Card Owner Name" /> </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-xs-12">
                                    <Link to="/receipt"><button className="btn-block">Confirm Payment</button>
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

export default Payment
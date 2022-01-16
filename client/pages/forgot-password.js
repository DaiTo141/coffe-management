import React from 'react';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import Link from 'next/link';
 
const ForgotPassword = () => {
    return (
        <>
            <Header />

            <PageBanner pageTitle="Forgot Password" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <a><img src="../images/coffee-logo.png" /></a>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default ForgotPassword;
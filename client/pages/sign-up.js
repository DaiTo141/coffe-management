import React from 'react';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import Link from 'next/link';
 
const SignUp = () => {
    return (
        <>
            <Header />

            <PageBanner pageTitle="Sign Up" />

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <a><img src="../images/coffee-logo.png" /></a>
                            </Link>
                            <p>Create a new account</p>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="ConfirmPassword" />
                            </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>

                        <div className="foot">
                            <p>Already have an account yet? <Link href="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default SignUp;
import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import Link from "next/link";
import * as Icon from "react-feather";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
const MySwal = withReactContent(Swal);

const Login = () => {
  const router = useRouter();
  const [isLogin, setLogin] = useState(false);

  const alertContent = () => {
    if (isLogin) {
      MySwal.fire({
        title: "Thank you!",
        text: "You are login",
        icon: "success",
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
    } else console.log("hello");
  };

  const userType = () => {
    setLogin(true);
    //Cho nay set bi cham 1 nhip
    setTimeout(() => {
      console.log("this is the third message", isLogin);
    }, 1000);
  };
  return (
    <>
      <Header />

      <PageBanner pageTitle="Login" />

      <div className="ptb-80">
        <div className="container">
          <div className="auth-form">
            <div className="auth-head">
              <Link href="/it-startup">
                <a>
                  <img src="../images/coffee-logo.png" />
                </a>
              </Link>
              {/* <p>
                Don't have an account yet? <Link href="/sign-up">Sign Up</Link>
              </p> */}
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={userType}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={userType}
                />
              </div>

              {/* <div className="mb-3">
                <p>
                  <Link href="/forgot-password">
                    <a>Forgot Password</a>
                  </Link>
                </p>
              </div> */}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={alertContent}
              >
                Login
              </button>
            </form>
            {/* 
            <div className="foot">
              <p>or connect with</p>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <Icon.Mail />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Icon.Twitter />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;

import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import Link from "next/link";
import * as Icon from "react-feather";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import axios from "axios";
const MySwal = withReactContent(Swal);

const Login = () => {
  const router = useRouter();
  const [isLogin, setLogin] = useState(false);

  const { handleSubmit, register } = useForm();
  const alertContent = (e) => {
    if (isLogin) {
      MySwal.fire({
        title: "Thành công",
        text: `Bạn đã đăng nhập với USERNAME là: ${e.username} PASSWORD là: ${e.password}`,
        icon: "success",
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
    } else console.log("hello");
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    // console.log(`e`, e)
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
    let response = await axios.post(`${serverUrl}/api/login`, {
      username: e.username,
      password: e.password
    })
    let data = response.data
    if (data.errorMessage) {
      MySwal.fire({
        title: "Thất bại",
        text: `${data.errorMessage}`,
        icon: "error",
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
    }
    else {
      localStorage.setItem("token", data.accessToken)
      router.push('/manage')
    }
  };

  const userType = () => {
    setLogin(true);
    //Cho nay set bi cham 1 nhip
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  {...register("username")}
                  onChange={userType}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("password")}
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

              <button type="submit" className="btn btn-primary">
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

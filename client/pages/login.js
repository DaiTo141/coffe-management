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
  let username = "";
  let password = "";
  const { handleSubmit, register } = useForm();

  const alertContent = () => {
      MySwal.fire({
        title: "Thành công",
        text: `Bạn đã đăng nhập thành công`,
        icon: "success",
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();

    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    let response = await axios.post(`${serverUrl}/api/login`, {
      username: username,
      password: password,
    });
    let data = response.data;
    if (data.errorMessage) {
      MySwal.fire({
        title: "Thất bại",
        text: `${data.errorMessage}`,
        icon: "error",
        // timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
    } else {
      alertContent()
      localStorage.setItem("token", data.accessToken);
      router.push("/manage");
    }
  };

  const handleUsername = (e) => {
    username = e.target.value;
  };

  const handlePassword = (e) => {
    password = e.target.value;
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
                  onChange={handleUsername}
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
                  onChange={handlePassword}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;

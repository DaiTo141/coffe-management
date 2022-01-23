import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import OrderList from "../components/Manage/Orderlist";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import moment from "moment"

const Manage = () => {
  const { addToast } = useToasts();
  const router = useRouter();
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    let token = localStorage.getItem("token");
    const verifyTokenUrl = `${serverUrl}/api/verifyToken`;
    axios
      .get(verifyTokenUrl, {
        params: {
          token: token,
        },
      })
      .then((res) => {
        let isValid = res.data.status;
        if (isValid) {
          const url = `${serverUrl}/authorization/orders`;
          axios
            .get(url, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
              setOrdersData(res.data);
            });
        } else {
          addToast("Bạn cần phải đăng nhập trước", { appearance: "error" });
          router.push("/login");
        }
      });
  }, []);
  const getSearchKey = async (key) => {
    let token = localStorage.getItem("token");
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    let url = `${serverUrl}/authorization/orders`
    let orderSearch = await axios.get(url, {
      params: {
        search: key
      },
      headers: { Authorization: `Bearer ${token}` },
    })
    setOrdersData(orderSearch.data)
  }
  const getFilterTime = async (time) => {
    const start = moment(time[0]).format("YYYY-MM-DD")
    const end = moment(time[1]).format("YYYY-MM-DD")
    let token = localStorage.getItem("token");
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    let url = `${serverUrl}/authorization/orders`
    let orderFilterTime = await axios.get(url, {
      params: {
        isFilterTime: true,
        filterTimeStart: start,
        filterTimeEnd: end,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
    setOrdersData(orderFilterTime.data)
  }
  return (
    <>
      <Header />
      <PageBanner pageTitle="Quản lý đơn hàng" />
      <div className="cart-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <OrderList ordersData={ordersData} getSearchKey={(x) => getSearchKey(x)} getFilterTime={(time) => getFilterTime(time)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Manage;

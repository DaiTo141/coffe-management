import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import OrderList from "../components/Manage/Orderlist";
import axios from "axios";


const Manage = ({ ordersData }) => {
  return (
    <>
      <Header />
      <PageBanner pageTitle="Quản lý đơn hàng" />
      <div className="cart-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <OrderList ordersData={ordersData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Manage;
Manage.getInitialProps = async ctx => {
  const url = 'http://localhost:3000/authorization/orders'
  const req = await axios.get(url)
  return {
    ordersData: req.data
  }
}

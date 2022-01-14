import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import OrderList from "../components/Manage/Orderlist";


const Manage = () => {
  return (
    <>
      <Header />
      <PageBanner pageTitle="Quản lý đơn hàng" />
      <div className="cart-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <OrderList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Manage;

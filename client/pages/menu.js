import React from "react";
import PageBanner from "../components/Layout/PageBanner";
import Header from "../components/Layout/Header";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Layout/Footer";
import ProductCard from "../components/Shop/ProductCard";
import Filter from "../components/Shop/Filter"

const Menu = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const filterProduct = (param) => {
    console.log("run run run")
    console.log(param)
    dispatch({
      type: "FILTER_PRODUCT",
      param: param
    })
    addToast("Chọn loại sản phẩm thành công", { appearance: "success" });
  }
  return (
    <>
      <Header />
      <PageBanner pageTitle="Menu" />
      <div className="container">
        <Filter filterProduct={filterProduct} />
        <ProductCard />
      </div>

      <Footer />
    </>
  );
};

export default Menu;

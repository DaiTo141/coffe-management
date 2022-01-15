import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/Shop/ProductCard";
import MainBanner from "../components/Home/Mainbanner";
import HotCombo from "../components/Home/HotCombo";
import axios from "axios"


const Home = ({ productsData }) => {
  const dispatch = useDispatch();
  const getProduct = (products) => {
    dispatch({
      type: "GET_PRODUCT_DATA",
      products
    })
  }
  getProduct(productsData)
  return (
    <>
      <Header />

      {/* <PageBanner pageTitle="Products" />  */}
      <MainBanner />
      <div className="pb-80"></div>
      <ProductCard products={productsData} />
      <HotCombo />

      <Footer />
    </>
  );
};

export default Home;

Home.getInitialProps = async ctx => {
  const url = 'http://localhost:3000/api/product'
  console.log(`url`, url)
  const req = await axios.get(url)
  return {
    productsData: req.data
  }
}

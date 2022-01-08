import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import ProductCard from "../components/Shop/ProductCard";
import MainBanner from "../components/Home/Mainbanner";
import HotCombo from "../components/Home/HotCombo";

const Home = () => {
  return (
    <>
      <Header />

      {/* <PageBanner pageTitle="Products" />  */}
      <MainBanner />
      <div className="pb-80"></div>
      <ProductCard />
      <HotCombo />

      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import PageBanner from '../components/Layout/PageBanner';
import ProductCard from '../components/Shop/ProductCard';
 
const Shop = () => {
    return (
        <>
            <Header />

            <PageBanner pageTitle="Products" /> 

            <ProductCard />
 
            <Footer />
        </>
    )
}

export default Shop;
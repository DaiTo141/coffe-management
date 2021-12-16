import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import CartContent from '../components/Cart/CartContent'
 
const Cart = () => {
    return (
        <>
            <Header />

            <div className="cart-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <CartContent />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Cart;
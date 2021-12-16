import React from "react"
import Link from '../../utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                Friends Coffee
                            </a>
                        </Link>

                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/shop" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Shop</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">
                            <Link href="/cart">
                                <a className="cart-wrapper-btn">
                                    <Icon.ShoppingCart />
                                    <span>{cart.length}</span>
                                </a>
                            </Link>

                            {/* <Link href="/contact">
                                <a className="btn btn-light">Support</a>
                            </Link> */}

                            <Link href="/login">
                                <a className="btn btn-primary">Login</a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
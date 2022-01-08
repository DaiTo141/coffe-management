import React from "react";
import Link from "next/link";
import PageBanner from "../components/Layout/PageBanner";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductCard from "../components/Shop/ProductCard";
import Filter from "../components/Shop/Filter"

const Menu = () => {

//   React.useEffect(() => {
//     let elementId = document.getElementById('category')
//     document.addEventListener('scroll', () => {
//         if (window.scrollY < 500) {
//             elementId.classList.remove('is-bottom')
//             elementId.classList.add('is-stop')
//         } else {
//             elementId.classList.remove('is-stop')
//             elementId.classList.add('is-bottom')
//         }
//     })
//     window.scrollTo(0, 0)
// })

  return (
    <>
      <Header />
      <PageBanner pageTitle="Menu" />
      <div className="container">
        {/* <div className="row"> */}
          {/* <div className="col-lg-2 pt-80">
            <div id="category">
              <ul className="category-list">
                <li>
                  <Link href="#" activeClassName="active">
                    <a className="">Tất cả</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" activeClassName="active">
                    <a className="">Cà phê</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" activeClassName="active">
                    <a className="">Trà</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" activeClassName="active">
                    <a className="">Tất cả</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" activeClassName="active">
                    <a className="">Món khác</a>
                  </Link>
                </li>
                <li>
                  <Link href="#" activeClassName="active">
                    <a className="">Bánh</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className="col-lg-10 menu-products"> */}
          <Filter />
            <ProductCard />
          {/* </div> */}
        {/* </div> */}
      </div>

      <Footer />
    </>
  );
};

export default Menu;

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import Filter from "./Filter";

const ProductCard = () => {
  const products = useSelector((state) => state.products);

  // console.log(products)

  return (
    <div className="shop-area pb-80">
      <div className="container">
        {/* <div className="woocommerce-topbar">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-7 col-sm-7">
              <div className="woocommerce-result-count">
                <p>Showing 1-8 of 14 results</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-sm-5">
              <Filter />
            </div>
          </div>
        </div> */}

        <div className="row justify-content-md-center">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
              <div className="single-products">
                <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <a>
                    <div className="products-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </a>
                </Link>

                <div className="products-content">
                  <h3>
                    <Link href="/products/[id]" as={`/products/${product.id}`}>
                      <a>{product.name}</a>
                    </Link>
                  </h3>
                  <span className="product-price">${product.price}</span>

                  {/* <AddToCartBtn {...product} /> */}
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Prev
                    </a>
                  </li>

                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

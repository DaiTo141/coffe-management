import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import Filter from "./Filter";

const ProductCard = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="shop-area pb-80">
      <div className="container">
        <div className="row justify-content-md-center">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
              <div className="single-products">
                <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <a>
                    <div className="products-image">
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                  </a>
                </Link>

                <div className="products-content">
                  <h3>
                    <Link href="/products/[id]" as={`/products/${product.id}`}>
                      <a>{product.title}</a>
                    </Link>
                  </h3>
                  <span className="product-price">{product.price} VNĐ</span>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



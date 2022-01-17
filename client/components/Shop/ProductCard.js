import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import Filter from "./Filter";
import ReactPaginate from "react-paginate";

const ProductCard = () => {
  const itemsPerPage = 8;
  const products = useSelector((state) => state.products);
  // We start with an empty list of items.
  const items = products;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log("end oof ", endOffset);
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  
  return (
    <div className="shop-area pb-80">
      <div className="container">
        <div className="row justify-content-center">
          {currentItems.map((product) => (
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
        <div className="pagination-area">
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

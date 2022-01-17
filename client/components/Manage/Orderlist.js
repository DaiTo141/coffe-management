import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { BillData, ProductData } from "./BillData";
import Modal from "react-modal";
import ReactPaginate from "react-paginate";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
let billDetail = BillData[0];
let productsDetail = ProductData[0];

const OrderList = () => {
  //For paginate
  const itemsPerPage = 1;
  // We start with an empty list of items.
  const items = BillData;
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

  //For modal
  const [modal, setModal] = useState(false);

  const openModal = (id) => {
    billDetail = getBillDetail(id);
    productsDetail = getProducts(id);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getProducts = (id) => {
    let products = ProductData.find((bill) => bill.id == id);
    return products;
  };

  const getBillDetail = (id) => {
    let billDetail = BillData.find((bill) => bill.id == id);
    return billDetail;
  };
  return (
    <>
      <div className="cart-table table-responsive ptb-80">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Email</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((bill) => (
              <>
                <tr key={bill.id} onClick={() => openModal(bill.id)}>
                  <td className="product-name">
                    <p>{bill.name}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.phone}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.address}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.email}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.total}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.time}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.note}</p>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
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

        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="order-details">
            <h3 className="title">Đơn hàng số: {billDetail.id}</h3>
            <h4>Tên: {billDetail.name}</h4>
            <div className="order-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá tiền</th>
                    <th scope="col">Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {productsDetail.products.map((prt) => (
                    <tr>
                      <td className="product-name">
                        <span className="subtotal-amount">{prt.name}</span>
                      </td>

                      <td className="product-total">
                        <span className="subtotal-amount">{prt.price}</span>
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">{prt.quantity}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default OrderList;

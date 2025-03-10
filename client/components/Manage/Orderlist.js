import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import { BillData, ProductData } from "./BillData";
import Modal from "react-modal";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import { setDate } from "date-fns";

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

const OrderList = ({ ordersData, getSearchKey, getFilterTime }) => {
  //For paginate

  const [items, setItems] = useState(ordersData);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchKey, setSearchKey] = useState("")

  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    setItems(ordersData);
  });


  //For modal
  const [modal, setModal] = useState(false);

  const formatTime = (time) => {
    let z = time.split("T")[0];
    let t = time.split("T")[1].split(".")[0];
    return t + " " + z;
  };
  const openModal = async (bill) => {
    let orderId = bill.id[0];
    let token = localStorage.getItem("token");
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    let url = `${serverUrl}/authorization/order-detail`;
    let orderDetail = await axios.get(url, {
      params: {
        orderId: orderId,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    billDetail = {
      id: bill.id[0],
      name: bill.fullname,
    };
    productsDetail = orderDetail.data.response;
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  //===================================//

  //For search input
  const handleSearch = (e) => {
    setSearchKey(e.target.value)
    getSearchKey(e.target.value)
  };

  //==================================//

  //For DateRangePicker
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const getDateRange = (x) => {
    setDateRange(x)
    getFilterTime(x)

  }
  return (
    <>
      <div className="row">
        <div className="widget widget_search col-lg-4">
          <form className="search-form">
            <label>
              <input
                type="search"
                id="search-field"
                name="search"
                placeholder="Tìm kiếm theo email"
                onChange={handleSearch}
              />
            </label>
            <button type="submit" onClick={(e) => onSubmit(e, input)}>
              <Icon.Search />
            </button>
          </form>
        </div>
        <div className="col-lg-4"></div>
        <div className="widget_date_range col-lg-4">
          {" "}
          <DateRangePicker onChange={getDateRange} value={dateRange} maxDate={new Date()} />
        </div>
      </div>
      <div className="cart-table table-responsive pb-80">
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
          <tbody
            style={{
              cursor: "pointer",
            }}
          >
            {currentItems.map((bill, index) => {
              return (
                <tr key={index} onClick={() => openModal(bill)}>
                  <td className="product-name">
                    <p>{bill.fullname}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.phone_number}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.address}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.email}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.total_price}</p>
                  </td>
                  <td className="product-name">
                    <p>{formatTime(bill.order_date)}</p>
                  </td>
                  <td className="product-name">
                    <p>{bill.note}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-area">
          <ReactPaginate
            nextLabel="Tiếp"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Trước"
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
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="order-details">
            <h3 className="title">Đơn hàng số: {billDetail.id}</h3>
            <h4>Tên khách hàng: {billDetail.name}</h4>
            <div className="order-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá tiền</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {productsDetail.products.map((prt, index) => (
                    <tr key={index}>
                      <td className="product-name">
                        <span className="subtotal-amount">{prt.name}</span>
                      </td>

                      <td className="product-total">
                        <span className="subtotal-amount">{prt.price}</span>
                      </td>

                      <td className="product-subtotal">
                        <span className="subtotal-amount">{prt.quantity}</span>
                      </td>
                      <td className="product-total">
                        <span className="subtotal-amount">
                          {prt.price * prt.quantity}
                        </span>
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

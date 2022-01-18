import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { BillData, ProductData } from "./BillData";
import Modal from "react-modal";
import axios from "axios";

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

const OrderList = ({ ordersData }) => {

  const [modal, setModal] = useState(false);

  const formatTime = (time) => {
    let z = time.split("T")[0]
    let t = time.split("T")[1].split(".")[0]
    return t + " " + z
  }
  const openModal = async (bill) => {
    let orderId = bill.id[0];
    let token = localStorage.getItem("token");
    let url = `http://localhost:3000/authorization/order-detail`
    let orderDetail = await axios.get(url, {
      params: {
        orderId: orderId
      },
      'headers': { 'Authorization': `Bearer ${token}` }
    })
    billDetail = {
      id: bill.id[0],
      name: bill.fullname
    }
    productsDetail = orderDetail.data.response;
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
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
          <tbody style={{
            "cursor": "pointer"
          }}>
            {ordersData.map((bill, index) => {
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
              )
            }
            )}
          </tbody>
        </table>

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
                        <span className="subtotal-amount">{prt.price * prt.quantity}</span>
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

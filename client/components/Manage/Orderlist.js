import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { BillData, ProductData } from "./BillData";
import Modal from "react-modal";

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
  const [modal, setModal] = useState(false);

  console.log("product ", productsDetail.products[0]);

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
            {BillData.map((bill) => (
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

import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import * as Icon from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Đặt hàng thành công",
    text: "Cảm ơn bạn đã đặt hàng!",
    icon: "success",
    timerProgressBar: true,
    showConfirmButton: true,
  });
};

const Checkout = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reset = () => {
    dispatch({
      type: "RESET",
    });
    router.push("/");
  };

  const onSubmit = (e) => {
    createCustomer({
      cart: cart,
      customer: e
    })
    alertContent();
    reset();
  };
  const createCustomer = async (info) => {
    const url = 'http://localhost:3000/api/customer'
    let response = await axios.post(url, info)
  }
  let totalmoney = 20000;

  const countTotal = () => {
    cart.forEach((crt) => {
      totalmoney += crt.quantity * crt.price;
    });
  };
  countTotal();

  return (
    <>
      <Header />

      <PageBanner pageTitle="Thanh toán" />

      <div className="checkout-area ptb-80">
        <div className="container">
          <form id="info-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Thông tin khách hàng</h3>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Tên<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          {...register("name", { required: true })}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.name && "Bạn chưa điền tên."}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Số điện thoại <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          {...register("phone", { required: true })}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.phone && "Bạn chưa điền số điện thoại."}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Email<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          {...register("email", { required: true })}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.email && "Bạn chưa điền email."}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Địa chỉ <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="street"
                          className="form-control"
                          {...register("street", { required: true })}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.street &&
                            "Bạn chưa điền địa chỉ (tên đường, số nhà, ...)"}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="notes"
                          id="notes"
                          cols="30"
                          rows="4"
                          placeholder="Ghi chú"
                          className="form-control"
                          {...register("notes")}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="order-details">
                  <h3 className="title">Đơn hàng</h3>

                  <div className="order-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Tên</th>
                          <th scope="col">Số lượng</th>
                          <th scope="col">Số tiền</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cart.map((crt) => (
                          <tr key={crt.id}>
                            <td className="product-name">
                              <span className="subtotal-amount">
                                {crt.title}
                              </span>
                            </td>

                            <td className="product-total">
                              <span className="subtotal-amount">
                                {crt.quantity}
                              </span>
                            </td>

                            <td className="product-subtotal">
                              <span className="subtotal-amount">
                                {crt.quantity * crt.price} VNĐ
                              </span>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td>Phí giao hàng</td>
                          <td></td>
                          <td>20000 VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout-total">
                      <p>Tổng cộng: {totalmoney} VNĐ</p>
                    </div>
                  </div>

                  <div className="payment-method">
                    <p>
                      <input
                        type="radio"
                        id="direct-bank-transfer"
                        name="radio-group"
                        defaultChecked
                      />
                      <label htmlFor="direct-bank-transfer">
                        Thanh toán tiền mặt
                      </label>
                    </p>
                    {/* <p>
                      <input type="radio" id="paypal" name="radio-group" />
                      <label htmlFor="paypal">Chuyển khoản</label>
                    </p> */}
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    // onClick={() => handleClickCheckout()}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;

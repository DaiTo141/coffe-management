import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageBanner from "../components/Layout/PageBanner";
import * as Icon from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";

const Checkout = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  // console.log(cart)

  const removeItem = (pId) => {
    dispatch({
      type: "REMOVE_ITEM",
      id: pId,
    });
    addToast("Cart Removed Successfully", { appearance: "error" });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
    // addToast('Thanks for your order.', { appearance: 'success' })
    router.push("/checkout");
  };

  return (
    <>
      <Header />

      <PageBanner pageTitle="Thanh toán" />

      <div className="checkout-area ptb-80">
        <div className="container">
          {/* <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <Icon.Edit />
                                <span>Returning customer? <a href="#">Click here to login</a></span>
                            </div>
                        </div>
                    </div> */}

          <form>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Billing Details</h3>

                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Tên<span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Quận <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Phường<span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Địa chỉ <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Số điện thoại <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
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
                          <th scope="col">Product Name</th>
                          <th scope="col">Số lượng</th>
                          <th scope="col">Tổng cộng</th>
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
                                ${(crt.quantity * crt.price).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

                  <a href="#" className="btn btn-primary order-btn">
                    Đặt hàng
                  </a>
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

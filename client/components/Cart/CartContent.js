import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import PageBanner from "../../components/Layout/PageBanner"
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import QtyForm from "./QtyForm";

const CartContent = () => {
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
    addToast("Xóa sản phẩm thành công", { appearance: "error" });
  };

  const reset = () => {
    // dispatch({
    //   type: "RESET",
    // });
    // addToast('Thanks for your order.', { appearance: 'success' })
    router.push("/checkout");
  };

  return (
    <>
      <PageBanner pageTitle="Giỏ hàng" />
      <div className="cart-table table-responsive ptb-80">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng cộng</th>
            </tr>
          </thead>

          <tbody>
            {cart.length ? (
              cart.map((crt) => (
                <tr key={crt.id}>
                  <td className="product-thumbnail">
                    <Link href="/product-details">
                      <a>
                        <img src={crt.thumbnail} alt="item" />
                      </a>
                    </Link>
                  </td>

                  <td className="product-name">
                    <Link href="/product-details">
                      <a>{crt.title}</a>
                    </Link>
                  </td>

                  <td className="product-price">
                    <span className="unit-amount">{crt.price} VNĐ</span>
                  </td>

                  <td className="product-quantity">
                    <QtyForm {...crt} />
                  </td>

                  <td className="product-subtotal">
                    <span className="subtotal-amount">
                      {(crt.quantity * crt.price)} VNĐ
                    </span>

                    <a
                      href="#"
                      className="remove"
                      onClick={() => {
                        removeItem(crt.id);
                      }}
                    >
                      <Icon.Trash2 />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Rỗng
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="cart-buttons">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="continue-shopping-box">
              <Link href="/menu">
                <a href="/menu" className="btn btn-light">
                  Tiếp tục mua
                </a>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="cart-totals">
        <h3>Đơn hàng</h3>

        <ul>
          <li>
            Số tiền <span>{total} VNĐ</span>
          </li>
          <li>
            Phí giao hàng <span>20000 VNĐ</span>
          </li>
          <li>
            Tổng cộng{" "}
            <span>
              <b>{(total + 20000)} VNĐ</b>
            </span>
          </li>
        </ul>

        <Link href="#">
          <a
            onClick={(e) => {
              e.preventDefault();
              reset();
            }}
            className="btn btn-primary"
          >
            Thanh toán
          </a>
        </Link>
      </div>
    </>
  );
};

export default CartContent;

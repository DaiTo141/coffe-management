import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="../../images/coffee-logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
              <p>
                Friends Coffee sẽ là nơi mọi người xích lại gần nhau, đề cao giá
                trị kết nối con người và sẻ chia thân tình bên những tách cà
                phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Giới thiệu</h3>
              <ul className="list">
                <li>
                  <Link href="/coming-soon">
                    <a>Về chúng tôi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/menu">
                    <a>Sản phẩm</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Chuyện bên lề</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Tuyển dụng</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Khuyến mãi</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="single-footer-widget">
              <h3>Hỗ trợ</h3>
              <ul className="list">
                <li>
                  <Link href="/coming-soon">
                    <a>Góp ý</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Chính sách</a>
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon">
                    <a>Liên hệ</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Địa chỉ</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15, Q.Bình
                  Thạnh, TP.Hồ Chí Minh
                </li>
                <li>
                  <Icon.Mail />
                  Email: <a href="#">friend@gmail.com</a>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Điện thoại: <a href="#">+8488888888</a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <Link href="#">
                    <a className="facebook" target="_blank">
                      <Icon.Facebook />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="instagram" target="_blank">
                      <Icon.Instagram />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="/images/map.png" className="map" alt="map" /> */}
    </footer>
  );
};

export default Footer;

import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Combo Quà Tết 2022</h2>
                <div className="bar"></div>
                <p>
                  Combo quà Tết 2022: Hộp quà tặng với 4 hộp trà túi lọc
                  Tearoma, Hộp cà phê sữa đá, Hộp cà phê 3in1 đậm vị Việt và Cà
                  phê Original 1 của The Coffee House với thành phần chính cà
                  phê Robusta Đắk Lắk, vùng trồng cà phê nổi tiếng nhất Việt
                  Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại.
                </p>
                <Link href="/menu">
                  <a className="btn btn-primary">Tìm hiểu thêm</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src="https://file.hstatic.net/1000075078/file/combo_cpg_906x762_04d6843c68e842bfb53d39d1f6c58425.png"
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src="https://file.hstatic.net/1000075078/file/combo_tearoma_906x762_9351dbc74b864753983ac179564c01a3.png"
                alt="product"
              />
            </div>

            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>Giftset Trà Tearoma</h2>
                <div className="bar"></div>
                <p>
                  Hộp quà tặng với 4 hộp trà túi lọc Tearoma các loại là món quà
                  thật ý nghĩa cho những người thân yêu trong dịp này.
                </p>
                <Link href="/menu">
                  <a className="btn btn-primary">Tìm hiểu thêm</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;

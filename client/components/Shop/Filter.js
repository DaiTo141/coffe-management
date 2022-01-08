import React from "react";

const Filter = () => {
  return (
    <div className="container">
      <div className="woocommerce-topbar">
        <div className="row">
            <div className="col-lg-9">

            </div>
          <div className="col-lg-3">
            <div className="woocommerce-topbar-ordering">
              <select className="form-select">
                <option value="1">Tất cả</option>
                <option value="2">Cà phê</option>
                <option value="3">Trà</option>
                <option value="4">Bánh</option>
                <option value="5">Món khác</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

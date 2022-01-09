import React from "react";
import Select from 'react-select'
const Filter = ({ filterProduct }) => {
  const handleChange = (newVal) => {
    filterProduct(newVal.value)
  }
  const options = [
    { value: 'All', label: 'Tất cả' },
    { value: 'Coffee', label: 'Cà Phê' },
    { value: 'Tea', label: 'Trà' }
  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
        </div>
        <div className="col-lg-4" >
          <Select options={options} onChange={handleChange} className="woocommerce-topbar" />
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="woocommerce-topbar">
    //     <div className="row">
    //       <div className="col-lg-9">
    //       </div>
    //       <div className="col-lg-3">
    //         <div className="woocommerce-topbar-ordering">
    //           <select className="form-select">
    //             <option value="1" onClick={() => {
    //               handleClick(0)
    //             }}>Tất cả</option>
    //             <option value="2" onClick={handleClick(1)}>Cà phê</option>
    //             <option value="3" onClick={handleClick(-1)}>Trà</option>
    //           </select>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Filter;

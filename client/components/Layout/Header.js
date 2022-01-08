import React from "react";
import Link from "../../utils/ActiveLink";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="../../images/coffee-logo.png" alt="logo"></img>
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Menu <Icon.ChevronDown />
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/menu" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Tất cả
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Cà phê
                        </a>
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Cà phê Việt Nam
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Cà phê máy
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Cold Brew
                            </a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>

                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Trà
                        </a>
                      </Link>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Trà trái cây
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Trà sữa Macchiato
                            </a>
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item">
                      <Link href="/about-3" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Bánh
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-3" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Món khác
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link activeClassName="active" href="/coming-soon">
                    <a className="nav-link">Chuyện bên lề</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClassName="active" href="/coming-soon">
                    <a className="nav-link">Tuyển dụng</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClassName="active" href="/coming-soon">
                    <a className="nav-link">Ưu đãi thành viên</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClassName="active" href="/coming-soon">
                    <a className="nav-link">Các cửa hàng</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <Link href="/cart">
                <a className="cart-wrapper-btn">
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </a>
              </Link>
              {/* <Link href="/login">
                <a className="btn btn-primary">Login</a>
              </Link> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

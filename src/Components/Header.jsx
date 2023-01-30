import React from "react";
import { NavLink } from "react-router-dom";

function Header({ isLogin, handleLogin, handleLogout }) {
  return (
    <header>
      <div className="flex container header">
        <a href="brand">
          <strong className="brand">Itax Easy</strong>
        </a>
        <label className="bars" for="toggle">
          <i className="fas fa-bars"></i>
        </label>
        <input id="toggle" type="checkbox" />

        <nav className="header-nav">
          <ul className="flex header-nav-ul sm-column">
            <li className="nav-li">
              <a class="nav-li" href="index.html">
                Our Products
              </a>
            </li>
            <li className="nav-li">
              <a href="#about">Our Service</a>
            </li>
            <li className="nav-li">
              <a href="#service">Finance Calculater</a>
            </li>
            <li className="nav-li">
              <a href="#portfolio">Register a Startup</a>
            </li>
            <li className="nav-li">
              <a href="#team">API's</a>
            </li>
            <li className="nav-li dd">
              <div>
                <a href="#">
                  Download<i class="drop fas fa-chevron-down"></i>
                </a>
                <ul className="sub-menu">
                  <li className="">
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="sub-dd ">
                    <a href="#">
                      Drop Down 2<i class="fas fa-chevron-right"></i>{" "}
                    </a>
                    <ul className="sub-menu-deep">
                      <li>
                        <a href="#">Deep Drop</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 5</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-li si">
              {
                isLogin ?
                  <div onClick={()=>handleLogout()} style={{color:"white"}} >Sign Out</div>
                 :
                  <NavLink to="/signin">Sign In</NavLink>
              }
            </li>
            {/* <li className="nav-li si"><a href="#contact">Sign In</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

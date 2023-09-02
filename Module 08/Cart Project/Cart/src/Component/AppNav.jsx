import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const AppNav = () => {
  return (
    <div className="navbar fixed top-0 bg-white z-50 px-20 drop-shadow-lg">
      <div className="flex-1">
        <img className="w-20" src="/images/logo.png" alt=".shop" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2">
          <li>
            <NavLink to="/">Product</NavLink>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-3">
          <li>
            <NavLink to="/cart-list">View Cart</NavLink>
          </li>
        </ul>

        <div className="dropdown dropdown-end px-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/user.webp" />
            </div>
          </label>
          {localStorage.getItem("token") && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/login" onClick={() => localStorage.clear()}>
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppNav;
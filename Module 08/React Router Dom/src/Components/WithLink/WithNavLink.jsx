import React from "react";
import { NavLink } from "react-router-dom";

const WithNavLink = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "textColor activeItem" : "textColor pendingItem"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "textColor activeItem" : "textColor pendingItem"
            }
            to="/about/0170900/more info"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "textColor activeItem" : "textColor pendingItem"
            }
            to="/profile/ridwanaFacebook/ridwanaYoutube"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default WithNavLink;

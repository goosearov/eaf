import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import notificationIcon from "../../assets/notificationIcon.png";
import navLogo from "../../assets/navLogo.png";
import userImg from "../../assets/userImg.png";
import { ReactComponent as AdminPagesIcon } from "../../assets/adminPagesIcon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboardIcon.svg";
import { ReactComponent as AdminNewsIcon } from "../../assets/adminNewsIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logoutIcon.svg";
import { ReactComponent as BarsIcon } from "../../assets/barsIcon.svg";
import "./styles.css";

const Layout = ({ children }) => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },

    {
      path: "/adminPages",
      name: "Страницы",
      icon: <AdminPagesIcon />,
    },
    {
      path: "/adminNews",
      name: "Новости",
      icon: <AdminNewsIcon />,
    },
  ];

  return (
    <div className="mainContainer">
      <div className="navContainer">
        <div className="navLogo">
          <img src={navLogo} alt="navLogo" />
        </div>
        <div className="user">
          <a href="#">
            <img
              className="imageNot"
              src={notificationIcon}
              alt="notification"
            />
          </a>
          <p className="role">{user.role}</p>
          <img className="image" src={userImg} alt="user" />
        </div>
      </div>
      <div className="sidebarContainer">
        <div style={{ width: isOpen ? "347px" : "90px" }} className="sidebar">
          <div className="bars">
            <BarsIcon onClick={toggle} />
          </div>
          {menuItem.map((item, index) => (
            <NavLink 
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          <button
            style={{ display: isOpen ? "block" : "none" }}
            className="logout"
            onClick={signOut}
          >
            <LogoutIcon className="svg" /> Log out
          </button>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

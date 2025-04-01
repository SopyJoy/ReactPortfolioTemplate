import React, { useState } from "react";
import "./Styles/Header.css";
import { Close, MenuBookOutlined } from "@mui/icons-material";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <h1>Logo Name</h1>
      </div>
      <nav>
        <ul className={active ? "navbar active" : "navbar"}>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <a
              href="/"
              onClick={(e) => {
                let main = document.getElementById("Main");
                e.preventDefault(); // Stop Page Reloading
                main && main.scrollIntoView();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                let section = document.getElementById("Section");
                e.preventDefault(); // Stop Page Reloading
                section && section.scrollIntoView();
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                let contact = document.getElementById("Contact");
                e.preventDefault(); // Stop Page Reloading
                contact && contact.scrollIntoView();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="changer">
        <MenuBookOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;

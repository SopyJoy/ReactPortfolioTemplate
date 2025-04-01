import React from "react";
import "./Styles/Main.css";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import anu from "./Assets/profile-icon.png";

const Main = () => {
  return (
    <div className="main" id="Main">
      <div className="main_container">
        <div className="main_content">
          <div className="text">
            <p>Hello Everyone!</p>
            <h1>I am Name</h1>
            <p>Front-end Developer & Designer</p>
            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
              <Facebook className="icon" />
              <LinkedIn className="icon" />
            </div>
            <div className="buttons">
              <button>See Me</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        <div className="main_img">
          <img src={anu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

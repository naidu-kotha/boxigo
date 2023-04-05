import React from "react";
import { RiTruckFill, RiLogoutCircleRLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import "./index.css";

const Sidebar = () => (
  <ul className="side-container">
    <li className="menu-container-selected">
      <RiTruckFill className="side-icon" />
      <h1 className="menu-name">MY MOVES</h1>
    </li>
    <li className="menu-container">
      <BsPersonFill className="side-icon" />
      <h1 className="menu-name">MY PROFILE</h1>
    </li>
    <li className="menu-container">
      <HiOutlineClipboardDocumentList className="side-icon" />
      <h1 className="menu-name">GET QUOTE</h1>
    </li>
    <li className="menu-container">
      <RiLogoutCircleRLine className="side-icon" />
      <h1 className="menu-name">LOGOUT</h1>
    </li>
  </ul>
);

export default Sidebar;

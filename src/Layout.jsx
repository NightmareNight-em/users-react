import React from "react";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import ChatBox from "./components/ChatBox/ChatBox";

function Layout({children}) {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div>
          {children}
          <ChatBox/>
        </div>
      </div>
    </div>
  );
}

export default Layout;

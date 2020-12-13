import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SideNavBar from "./SideNavbar";

const App =() =>{
  return (
    <>
    <BrowserRouter>
    <Header/>
    <SideNavBar />
    <Main />
    </BrowserRouter>
    
    </>
  )
}

export default App;
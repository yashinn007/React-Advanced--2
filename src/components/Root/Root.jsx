import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import SideBar from "../body/SideBar/SideBar";
import Footer from "../Footer/Footer";

const Root = () => {
  //global pending using navigation
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto bg-cyan-400 flex">
        <SideBar></SideBar>
        {isNavigating && (
          <span className="text-3xl text-red-800 font-bold my-auto">
            Loading....
          </span>
        )}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

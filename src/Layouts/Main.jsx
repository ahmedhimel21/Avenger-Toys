import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/Header/NavigationBar';

const Main = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
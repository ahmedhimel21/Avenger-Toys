import React from 'react';
import NavigationBar from '../Shared/Header/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const AddAToyLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default AddAToyLayout;
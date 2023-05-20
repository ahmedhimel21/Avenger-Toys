import React from 'react';
import NavigationBar from '../Shared/Header/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MyToysLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className='min-h-[100vh]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyToysLayout;
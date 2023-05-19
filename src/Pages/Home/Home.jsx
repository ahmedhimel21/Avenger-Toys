import React from 'react';
import useTitle from "../../hooks/useTitle";
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </>
  );
};

export default Home;
import React from 'react';
import useTitle from "../../hooks/useTitle";
import Banner from './Banner';
import Gallery from './Gallery';

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
    </>
  );
};

export default Home;
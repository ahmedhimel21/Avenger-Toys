import React from 'react';
import useTitle from "../../hooks/useTitle";
import Banner from './Banner';

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner></Banner>
    </>
  );
};

export default Home;
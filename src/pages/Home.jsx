import React from 'react';
import About from '../layout/About';
import ApplicationOpening from '../layout/ApplicationOpening';
import Cards from '../layout/Cards';
import Header from '../layout/Header';
import LearningPaths from '../layout/LearningPaths';

const Home = () => {
  return (
    <>
      <Header />
      <ApplicationOpening />
      <Cards />
      <hr />
      <About />
      <LearningPaths />
    </>
  );
};

export default Home;

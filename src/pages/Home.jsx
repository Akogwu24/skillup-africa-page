import React from 'react';
import About from '../layout/About';
import ApplicationOpening from '../layout/ApplicationOpening';
import BecomeIntern from '../layout/BecomeIntern';
import Cards from '../layout/Cards';
import Header from '../layout/Header';
import LearningPaths from '../layout/LearningPaths';
import QuestionAnswers from '../layout/QuestionAnswers';
import Steps from '../layout/Steps';

const Home = () => {
  return (
    <>
      <Header />
      <ApplicationOpening />
      <Cards />
      <hr />
      <About />
      <LearningPaths />
      <BecomeIntern />
      <Steps />
      <QuestionAnswers />
    </>
  );
};

export default Home;

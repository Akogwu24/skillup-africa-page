import React, { useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='requirement-container container my-10 flex flex-col md:flex-row justify-between md:gap-16 gap-5 items-center px-5 py-10'>
      <CardComponent
        aosProps='flip-left'
        cardContainer='bg-gray-light flex-1 shadow-lg md:shadow-xl h-72 px-10 py-10 my-5 w-full sm:w-2/3'
        headingStyles='text-green-dark text-4xl pb-3 text-center'
        heading='Entry Requirement'
        list1='Applicants must posses background knowledge of the subject matter'
        list2='Applicant must reside in Abuja'
        listStyles='list-disc text-xl py-2'
      />
      <CardComponent
        aosProps='flip-down'
        cardContainer='bg-gray-light px-10 flex-1 shadow-lg md:shadow-xl h-72 py-10  my-5  w-full sm:w-2/3'
        headingStyles='text-green-dark text-4xl pb-3 text-center'
        heading='Entry Requirement'
        list1='This is a paid internship and as such, participants will receive a stipend of N30,000 monthly for the period of the internship'
        listStyles='list-disc text-lg py-2'
      />

      <CardComponent
        aosProps='flip-right'
        cardContainer='bg-gray-light px-10 flex-1 shadow-lg md:shadow-xl h-72 py-10 my-5  w-full sm:w-2/3'
        headingStyles='text-green-dark text-4xl pb-3 text-center'
        heading='Entry Requirement'
        list1='At the end of the seven (7) months program, outstanding participants will be given jobs'
        listStyles='list-disc text-lg py-2'
      />
    </div>
  );
};

export default Cards;

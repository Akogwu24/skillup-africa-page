import React from 'react';
import CardComponent from '../components/CardComponent';

const Cards = () => {
  return (
    <div className='requirement-container container my-10 flex justify-between gap-16 items-center py-10'>
      <CardComponent
        cardContainer='bg-gray-light flex-1 shadow-xl h-72 px-10 py-10 '
        headingStyles='text-green-dark text-4xl pb-3'
        heading='Entry Requirement'
        list1='Applicants must posses background     knowledge of the subject matter'
        list2='Applicant must reside in Abuja'
        listStyles='list-disc text-lg py-2'
      />
      <CardComponent
        cardContainer='bg-gray-light px-10 flex-1 shadow-xl h-72 py-10 '
        headingStyles='text-green-dark text-4xl pb-3'
        heading='Entry Requirement'
        list1='This is a paid internship and as such, participants will receive a stipend of N30,000 monthly for the period of the internship'
        listStyles='list-disc text-lg py-2'
      />
      <CardComponent
        cardContainer='bg-gray-light px-10 flex-1 shadow-xl h-72 py-10 '
        headingStyles='text-green-dark text-4xl pb-3'
        heading='Entry Requirement'
        list1='At the end of the seven (7) months program, outstanding participants will be given jobs'
        listStyles='list-disc text-lg py-2'
      />
    </div>
  );
};

export default Cards;

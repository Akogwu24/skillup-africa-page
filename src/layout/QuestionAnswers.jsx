import React from 'react';
import FAQ from '../components/FAQ';
import Text from '../components/utils/Text';
import questions from '../FAQData';
import { answers } from '../FAQData';

const QuestionAnswers = () => {
  console.log(questions);
  console.log(answers);
  return (
    <section className='faq container my-10'>
      <div className='h-64 flex justify-center items-center text-center mb-16 mt-32'>
        <Text
          paragraphStyle='text-5xl text-green font-bold'
          header='Questions and Answers'
          headerStyle='text-2xl text-blue font-bold mb-5'
          firstParagraph='FAQs'
        />
      </div>
      <div className=' '>
        {questions?.map((question, index) => (
          <div key={index}>
            <FAQ question={question} answer={answers[index]} />
          </div>
        ))}
        <hr />
      </div>
    </section>
  );
};

export default QuestionAnswers;

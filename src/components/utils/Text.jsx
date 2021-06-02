import React from 'react';

const Text = ({
  preHeader,
  header,
  firstParagraph,
  secondParagraph,
  preheaderStyle,
  headerStyle,
  paragraphStyle,
  textContainer,
}) => {
  return (
    <div className={`text ${textContainer}`}>
      <p className={preheaderStyle}>{preHeader}</p>
      <h1 className={headerStyle}>{header}</h1>
      <p className={paragraphStyle}>{firstParagraph}</p>
      <p className={paragraphStyle}>{secondParagraph}</p>
    </div>
  );
};

export default Text;

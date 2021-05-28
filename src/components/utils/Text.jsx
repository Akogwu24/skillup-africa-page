import React from 'react';

const Text = ({
  preHeader,
  header,
  firstParagraph,
  secondParagraph,
  preheaderStyle,
  headerStyle,
  paragraphStyle,
}) => {
  return (
    <div>
      <p className={preheaderStyle}>{preHeader}</p>
      <h1 className={headerStyle}>{header || 'Skill u'}</h1>
      <p className={paragraphStyle}>{firstParagraph}</p>
      <p className={paragraphStyle}>{secondParagraph}</p>
    </div>
  );
};

export default Text;

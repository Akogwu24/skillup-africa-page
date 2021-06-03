import React from 'react';

const CardComponent = ({
  heading,
  list1,
  list2,
  list3,
  img,
  imgStyles,
  headingStyles,
  listContainer,
  listStyles,
  cardContainer,
  imageContainer,
  aosProps,
}) => {
  return (
    <div data-aos={aosProps} className={cardContainer}>
      <div className={imageContainer}>
        {img ? <img className={imgStyles} src={img} alt='img' /> : ''}
      </div>
      <h3 className={headingStyles}>{heading || 'entry requirement'}</h3>
      <ul className={listContainer}>
        <li className={listStyles}>{list1 || 'lorem'}</li>
        {list2 ? <li className={listStyles}>{list2}</li> : ''}
        {list3 ? <li className={listStyles}>{list3}</li> : ''}
      </ul>
    </div>
  );
};

export default CardComponent;

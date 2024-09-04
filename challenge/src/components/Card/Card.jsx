import React from 'react';
import styles from './Card.module.scss';

const Card = ({ variant, children }) => {
  const cardClasses = !variant
  ? `${styles.card} ${styles.firstCard}`
  : variant === 'border'
    ? `${styles.card} ${styles.border}`
    : `${styles.card} ${styles.default}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;

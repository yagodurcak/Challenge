import React from 'react';
import styles from './Button.module.scss';
import Shapelupa from "../../assets/Shapelupa.png";

const Button = ({ variant, disabled }) => {
  const classNames = `${styles.button} ${variant === 'icon' ? styles.icon : styles.default} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={classNames} disabled={disabled}>
      {variant === "icon" && <img src={Shapelupa} alt="icon" height={22} width={22} />}
      <span className={variant === "icon" ? styles.textWithIcon : styles.textWithoutIcon}>
        This is a two line button that terminates with This is a two line button that terminates with...
      </span>
    </button>
  );
};

export default Button;

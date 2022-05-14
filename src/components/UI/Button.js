import React from 'react';
import './Button.css';

const Button = ({ children, type, extra, onClick }) => {
  return (
    <button className={`btn ${type}`} style={extra} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

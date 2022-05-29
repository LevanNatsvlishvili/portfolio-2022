import React from 'react';
import Link from 'next/link';

function Button({ children, className, to, ...rest }) {
  if (to)
    return (
      <Link className={`px-4 py-2 neon-button ${className}`} to={to} {...rest}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </Link>
    );
  return (
    <button className={`px-4 py-2 neon-button ${className}`} {...rest}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}

export default Button;

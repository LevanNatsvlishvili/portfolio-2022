import React from 'react';

function Image(props) {
  const { src, alt, className, ...rest } = props;
  return (
    <img
      className={` ${className}`}
      src={src}
      alt={alt ? alt : 'No Pic'}
      {...rest}
    />
  );
}

export default Image;

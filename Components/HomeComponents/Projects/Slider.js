import Image from 'Components/Image';
import React from 'react';

const images = [
  { id: 0, img: 'images/projects/clothingstore.png' },
  { id: 1, img: 'images/projects/dataninja.png' },
  { id: 2, img: 'images/projects/tourism.png' },
  { id: 3, img: 'images/projects/clothingstore.png' },
  { id: 4, img: 'images/projects/dataninja.png' },
  { id: 5, img: 'images/projects/tourism.png' },
];

function Slider(props) {
  const { shouldDisplay } = props;

  return (
    <div
      className={`w-[90%] sm:w-3/4 lg:w-1/2 h-[70%] lg:h-1/2 lg:ml-100 relative glass-effect overflow-hidden rounded-xl ${
        shouldDisplay ? 'glass-effect-active' : ''
      } `}
    >
      <div
        style={{ width: `${images.length}00%` }}
        className="flex transition slider-auto h-full"
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full h-full "
            src={image.img}
            alt="project"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

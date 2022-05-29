import React from 'react';

const Summary = () => {
  return (
    <div className="styled-card w-full flex-col pt-12 h-full p-5 flex items-center">
      <div className="about-image-container w-[200px] h-[200px] ">
        <img
          className="about-image-container-image"
          src="images/me2.jpg"
          alt=""
        />
      </div>
      <h5 className="pt-8 text-center text-grey-text text-3xl text-white">
        Levan Natsvlishvili
      </h5>
      <h1 className="pt-1 text-center pb-6 text-grey-text text-xl text-orange">
        Front-end Developer
      </h1>
      <p className="text-grey-text p-2 text-center text-base scroll-bar firago-light lg:h-80 overflow-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Summary;

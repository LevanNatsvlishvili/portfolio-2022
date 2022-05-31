import FrontText from 'Components/Animations/FrontText';
import React from 'react';
import useStore from 'Store/Context';
import Form from './Form';

function Contact() {
  const { currView } = useStore();

  return (
    <section>
      <div className="w-full hidden lg:block absolute left-1/5 md:left-40 sm: z-10">
        <FrontText
          shouldDisplay={currView === 3}
          heading1="Contact"
          bottom="L.nats51@yahoo.com"
        />
      </div>
      <Form shouldDisplay={currView === 3} />
    </section>
  );
}

export default Contact;

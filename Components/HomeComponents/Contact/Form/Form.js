import React, { useEffect, useRef, useState } from 'react';
import FormButton from './FormButton';

class CleanForm {
  constructor() {
    this.mail = '';
    this.message = '';
  }
}

function Contact(props) {
  const { shouldDisplay } = props;
  const [viewBox, setViewBox] = useState('0 0 0 0');
  const formRef = useRef();

  useEffect(() => {
    setViewBox(
      `0 0 ${formRef.current?.offsetWidth} ${
        formRef.current?.offsetHeight + formRef.current?.offsetHeight / 2
      }`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formRef.current]);

  const [form, setForm] = useState(new CleanForm());
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    if (submited) setSubmited(false);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setForm(new CleanForm());
    setSubmited(true);
    setTimeout(() => {
      document.getElementById('svgowl').classList.add('flying-active');
    }, 2000);
  };

  useEffect(() => {
    if (shouldDisplay) {
      setTimeout(() => {
        document.getElementById('svgowl').classList.add('activePage');
      }, 500);
      return;
    }
    setTimeout(() => {
      document.getElementById('svgowl').classList.remove('activePage');
    }, 500);
    setTimeout(() => {
      document.getElementById('svgowl').classList.remove('flying-active');
    }, 1000);
    if (submited) setSubmited(new CleanForm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldDisplay]);

  return (
    <>
      <div
        ref={formRef}
        className="signup-form styled-card lg:right-36 top-1/4 lg:top-auto w-[85%] lg:w-1/3 z-20 absolute flex-col flex justify-center"
      >
        <svg
          className="owl-root absolute left-0 -z-10 hidden sm:block"
          id="svgowl"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
        >
          <g className="owl">
            <path
              className="owl_body"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              cy="22"
              stroke-height="15"
              d="M252.9 67.1c1.9 2 3.1 3.9 5.7 5.4.7.6 1.4 1.1 2.3 1.5-1.8 6.1-1.8 12.7-.2 18.8.6 2.2 1.7 4.7 3.8 5.9.6.4 1.7.5 2.3.2.7 1.8 2.2 3.2 4.3 3.6 1.5.3 2.7-.2 3.5-1.2 0 .1.1.1.1.1 1.8 1.3 4 2.3 6.2 1.4 1-.4 1.8-1.2 2.2-2.2 1.3 1.1 3.1 1.4 4.5.3.9-.7 1.5-2 1.5-3.2.1 0 .3-.1.3-.3.9-1.8 1.9-3.5 2.4-5.5.5-1.9.5-3.8.4-5.8-.2-4.5-.6-9.3-1.2-13.3 2.5-1 4.3-3.4 4.3-3.4s1.8-1.5 3.5-4.3 3.1-10 3.8-11.9c.9-2.3 1.3-5 1.4-7.5 0-4.6-1.6-10.4-5-13.7 1-1.2 1.5-2.9 2.1-4.2.7-1.6 1.2-3.3 1.4-5 .4-3.8-.7-7.5-2.7-10.8 1.5-1.3 2.9-3.3 3.8-5 1.2-2.1 1.4-4.1.5-6.4-.1-.2-.3-.2-.4-.2h-.1l-6 1.2c-2 .4-4.1 1-6.1 1.1-1.9.1-3.8-.3-5.7-.5-2-.3-3.9-.4-5.9-.5-3.9-.2-7.8 0-11.6.4-3.9.5-7.8 1.5-11.8 1-4-.5-7.6-2.6-11.6-2.6-.1-.3-.6-.3-.6.1 0 2.3.5 4.6 1.5 6.7.8 1.7 2.1 4.2 3.8 5.2-1.7 2.6-1.8 6.4-1.7 9.4.1 2.8.4 6.8 2.2 9l.1.1c-2.9 4.4-5 9.4-5.1 14.8.1 4.7 4.1 18.4 7.8 21.3z"
            />
            <g className="eyes_wrapper">
              <g className="eye_left">
                <circle
                  className="white"
                  fill="#FCEE21"
                  stroke="#000"
                  strokeMiterlimit="10"
                  cx="263.2"
                  cy="22.4"
                  r="8.9"
                />
                <g className="owl_iris_left">
                  <ellipse
                    className="iris"
                    stroke="#000"
                    strokeMiterlimit="10"
                    cx="262.9"
                    cy="21.8"
                    rx="2.9"
                    ry="2.8"
                  />
                  <path
                    className="light"
                    fill="#FCEE21"
                    stroke="#FCEE21"
                    strokeMiterlimit="10"
                    d="M260.3 20.1l1.7.9-.6-2s-.8.2-1.1 1.1z"
                  />
                </g>
              </g>
              <g className="eye_right">
                <circle
                  className="white"
                  fill="#FCEE21"
                  stroke="#000"
                  strokeMiterlimit="10"
                  cx="286.7"
                  cy="22.4"
                  r="9.1"
                />
                <g className="owl_iris_right">
                  <ellipse
                    className="iris"
                    stroke="#000"
                    strokeMiterlimit="10"
                    cx="286.4"
                    cy="21.7"
                    rx="3"
                    ry="2.9"
                  />
                  <path
                    className="light"
                    fill="#FCEE21"
                    stroke="#FCEE21"
                    strokeMiterlimit="10"
                    d="M283.7 20.1l1.7.9-.6-2s-.8.2-1.1 1.1z"
                  />
                </g>
              </g>
            </g>

            <path
              className="left_wing"
              d="M255.7 31.3c-.6-.1-1.2-.1-1.8.1-.2.1-.3.2-.5.3.1 0 .1 0 .2.1v.1c-.1 0-.3 0-.4.1-.1.1-.2.2-.3.2-5.5 6.9-6.8 16.1-5 24.6 2.2 10.3 8.7 19.1 15.5 26.8.2-.1.4-.3.5-.4.1-.1.2-.3.4-.4 5.4-8.8 6.5-21.4 5-31.3-1.1-7.8-5.5-17.7-13.6-20.2z"
            />
            <path
              className="right_wing"
              d="M296.7 30.2c.6-.2 1.2-.1 1.8.1.2.1.3.2.5.3-.1 0-.1 0-.2.1v.1c.1 0 .3 0 .4.1.1.1.2.2.3.2 5.6 6.8 7 16 5.3 24.6-2.1 10.3-8.4 19.2-15.2 27-.2-.1-.4-.3-.5-.4l-.4-.4c-5.5-8.7-6.7-21.3-5.4-31.2 1-7.9 5.2-17.8 13.4-20.5z"
            />
            <g className="right_claws" fill="#FBB03B">
              <path d="M286.6 78.6c.1-.6.1-1.3 0-1.8-.1-.8-.4-1.3-1-1.6-.1-.1-.3-.2-.5-.3-.1 0-.1.1-.1.1-.6.5-.7 1.4-.6 2.2.1 1 .5 1.9.6 2.9.1 1 .1 2 .1 3v.1c-.1.1.1.2.1.1.3-.4.4-.7.6-1.1.2-.2.3-.5.4-.7.1-.2.1-.4.1-.6.1-.4.2-.9.2-1.3s.1-.7.1-1zM289.1 75.7c-.1-.3-.4-1.2-.7-1.3v-.1c-1-.3-1.3.8-1.3 1.6.1 1 .4 2 .5 3 .2 1.1.1 2.3.3 3.4v.2c0 .2.2.3.3.1.7-2.2 1.4-4.6.9-6.9zM284.1 77.7c-.1-.3-.4-1.2-.7-1.3v-.1c-1-.3-1.3.8-1.3 1.6.1 1 .4 2 .5 3 .2 1.1.1 2.3.3 3.4v.2c0 .2.2.3.3.1.7-2.2 1.4-4.6.9-6.9z" />
            </g>
            <g className="left_claws" fill="#FBB03B">
              <path d="M264.8 78.6c-.1-.6-.1-1.3 0-1.8.1-.8.4-1.3 1-1.6.1-.1.3-.2.5-.3.1 0 .1.1.1.1.6.5.7 1.4.6 2.2-.1 1-.5 1.9-.6 2.9-.1 1-.1 2-.1 3v.1c.1.1-.1.2-.1.1-.3-.4-.4-.7-.6-1.1-.2-.2-.3-.5-.4-.7-.1-.2-.1-.4-.1-.6-.1-.4-.2-.9-.2-1.3-.1-.4-.1-.7-.1-1zM263.1 82.5c.1.2.3.1.3-.1v-.2c.2-1.1.2-2.2.3-3.4.1-1 .5-2 .5-3 .1-.8-.3-1.9-1.3-1.6-.1 0-.1.1 0 .1-.4.2-.7 1-.7 1.3-.5 2.4.2 4.8.9 6.9zM268.1 84.5c.1.2.3.1.3-.1v-.2c.2-1.1.2-2.2.3-3.4.1-1 .5-2 .5-3 .1-.8-.3-1.9-1.3-1.6-.1 0-.1.1 0 .1-.4.2-.7 1-.7 1.3-.5 2.4.2 4.8.9 6.9z" />
            </g>

            <g>
              <foreignObject x="260.2" y="26.4" width="100" height="100">
                <img src="images/icons/mail.svg" width="30px" alt="" />
              </foreignObject>
            </g>
            <g>
              <svg
                className="beak"
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="9"
                x="272"
                y="30.4"
                viewBox="0 0 5 9"
              >
                <path
                  id="Polygon_1"
                  data-name="Polygon 1"
                  d="M2.211,1.041a.3.3,0,0,1,.578,0L4.894,8.62A.3.3,0,0,1,4.605,9H.395a.3.3,0,0,1-.289-.38Z"
                  transform="translate(5 9) rotate(180)"
                  fill="#fcee21"
                />
              </svg>
            </g>
          </g>
        </svg>
        <input
          type="text"
          className="bg-[#141414] my-2 rounded-3xl w-full py-2 text-sm px-4 outline-none w-full"
          placeholder="Email"
          required
          value={form.mail}
          name="mail"
          onChange={handleChange}
        />
        <textarea
          type="textarea"
          className="scroll-bar bg-[#141414] my-2 h-28 rounded-3xl w-full py-4 text-sm px-4 outline-none w-full"
          placeholder="Message"
          required
          value={form.message}
          name="message"
          onChange={handleChange}
        />

        <FormButton onClick={handleSubmit} submited={submited} />
      </div>
    </>
  );
}

export default Contact;

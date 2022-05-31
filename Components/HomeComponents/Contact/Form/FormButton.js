import React from 'react';

function FormButton(props) {
  const { onClick, submited } = props;

  return (
    <div className="signup-button my-1 relative flex justify-center">
      <button
        className={`w-full rounded-3xl flex justify-center items-center relative ${
          submited ? 'signup-button-clicked' : ''
        }`}
        onClick={onClick}
      >
        <span>Submit</span>

        <svg
          className="feather feather-check"
          fill="none"
          height="24"
          stroke="#91b3bc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    </div>
  );
}

export default FormButton;

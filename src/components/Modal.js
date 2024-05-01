import React from "react";

const Modal = ({ isVisible, hideModal }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay" onClick={hideModal}>
      <div className="modal">
        <button className="close-modal" onClick={hideModal}>
          &times;
        </button>
        <h1>I'M A MODAL WINDOW! 😊</h1>
        <p>
          Still getting my React and JavaScript groove on. Thanks a bunch for
          hanging in there with me!
        </p>
      </div>
    </div>
  );
};

export default Modal;

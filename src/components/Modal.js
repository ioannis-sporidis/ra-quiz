import React from "react";
import { useGlobalContext } from "../helpers/context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  const finalScore = ((correct / questions.length) * 100).toFixed(0);
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered {finalScore}% of questions correctly</p>
        <button className="close-btn" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;

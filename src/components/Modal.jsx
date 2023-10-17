import Cerrar from "../img/cerrar.svg";
import { useState } from "react";
const Modal = ({ setModal }) => {
  const ocultarModal = () => {
    setModal(false);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="cerrar modal" onClick={ocultarModal} />
      </div>
    </div>
  );
};

export default Modal;

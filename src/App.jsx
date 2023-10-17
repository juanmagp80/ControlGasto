import { useState } from "react";
import Header from "./components/Header";
import NuevoPresupuesto from "./components/NuevoPresupuesto";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false); // modal es un estado que se usa para saber si el modal esta abierto o cerrado
  const handleNuevoGasto = () => {
    setModal(true);
  };
  // isValidPresupuesto es un estado que se usa para saber si el presupuesto es valido o no
  // setIsValidPresupuesto es una funcion que se usa para setear el estado de isValidPresupuesto
  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={iconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import NuevoPresupuesto from "./components/NuevoPresupuesto";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import { formatearFecha } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";
import { format, formatDistance, formatRelative, set, subDays } from "date-fns";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  const [gastoBorrar, setGastoBorrar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
        console.log("cerrando modal");
      }, 500);
    }
  }, [gastoEditar]);

  // modal es un estado que se usa para saber si el modal esta abierto o cerrado
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
      console.log("cerrando modal");
    }, 500);
  };
  // guardarGastos es una funcion que se usa para guardar los gastos
  // gasto es un objeto que se usa para guardar los gastos
  // gasto.id es un numero que se usa para identificar los gastos
  // gasto.nombre es un string que se usa para guardar el nombre del gasto
  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    // fecha actual
    gasto.cantidad = Number(gasto.cantidad);
    gasto.categoria = gasto.categoria.toLowerCase();
    setGastos([...gastos, gasto]);
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  // isValidPresupuesto es un estado que se usa para saber si el presupuesto es valido o no
  // setIsValidPresupuesto es una funcion que se usa para setear el estado de isValidPresupuesto
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastoBorrar={gastoBorrar}
        setGastoBorrar={setGastoBorrar}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
            />
          </main>

          <div className="nuevo-gasto">
            <img
              src={iconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;

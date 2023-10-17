import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  // funcion para manejar el boton de validar presupuesto del formulario

  const handlePresupuesto = (e) => {
    e.preventDefault();
    /* aqui se valida que el presupuesto sea un numero y que sea mayor a 0
     si no es un numero o es menor a 0 se muestra un mensaje de error
     y se retorna para que no se ejecute el código de abajo
    si es un numero y es mayor a 0 se limpia el mensaje de error
     y se ejecuta el código de abajo
     se setea el presupuesto en el estado global
    se setea el mensaje en el estado global
    se setea el estado de la aplicacion en "gastos"*/

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");

      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Añadir"
        />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;

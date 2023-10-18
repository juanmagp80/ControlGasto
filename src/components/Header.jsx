import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastoEditar,
  setGastoEditar,
  setGastoBorrar,
  gastoBorrar,
}) => {
  // Retorna un header con un titulo y un componente Planificador de Gastos que se muestra si el presupuesto es valido
  // si el presupuesto no es valido se muestra el componente NuevoPresupuesto
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          gastoBorrar={gastoBorrar}
          setGastoBorrar={setGastoBorrar}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;

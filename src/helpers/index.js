// Función para generar un id único
export const generarId = () => {
  const random = Math.random().toString(36).substr(2, 9);
  const fecha = Date.now().toString(36);
  return `${random}+${fecha}`;
};
export const formatearFecha = (fecha) => {
  return new Date().toLocaleDateString("es-ES", { dateStyle: "full" });
};

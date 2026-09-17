const NOMBRES = {
    pendiente: 'Pendiente',
    en_progreso: 'En progreso',
    completada: 'Completada',
};
export function crearEtiqueta(actividad) {
    return `${actividad.titulo} · ${NOMBRES[actividad.estado]}`;
}

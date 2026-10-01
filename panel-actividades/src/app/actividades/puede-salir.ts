import { CanDeactivateFn } from '@angular/router';

interface FormularioConCambios {
  tieneCambios: () => boolean;
}

export const puedeSalir: CanDeactivateFn<FormularioConCambios> = (componente) =>
  !componente.tieneCambios() ||
  window.confirm('Hay cambios sin guardar. ¿Quieres salir sin guardar?');
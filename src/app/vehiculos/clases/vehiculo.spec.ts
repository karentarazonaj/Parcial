import { Vehiculo } from './vehiculo';

describe('Vehiculo', () => {
  it('should create an instance', () => {
    const vehiculo = new Vehiculo(1, 'Renault', 'Sandero', 'Nueva Vida Auténtica', 2020, 25629, 'Rojo', 'https://cdn.group.renault.com/ren/co/vehicles/sandero/home/nuevo-renault-sandero-rojo-fuego.jpg.ximg.xsmall.jpg/0b9611c786.jpg');
    expect(vehiculo).toBeTruthy();
  });
});

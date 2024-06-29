const { Cliente, Producto } = require('../src/ModuloReseñaYValoraciones');

describe('Módulo de Reseñas y Valoraciones', function() {
  it('debería crear un cliente y una valoración de producto correctamente', function() {
    // Crear un cliente
    const cliente = new Cliente('Jorlenis', null, 'Gaitan', null);

    // Crear un producto con valoración
    const producto = new Producto('Collar de perlas', 5);

    // Validar que el cliente se haya creado correctamente
    expect(cliente.nombre1).toBe('Jorlenis');
    expect(cliente.apellido1).toBe('Gaitan');

    // Validar que el producto con valoración se haya creado correctamente
    expect(producto.nombre_producto).toBe('Collar de perlas');
    expect(producto.calificacion).toBe(5);
  });

  it('debería invalidar una valoración no válida', function() {
    // Crear un producto con una valoración no válida
    const producto = new Producto('Collar de perlas', 'cinco'); // 'cinco' no es un número válido

    // Validar que la valoración no sea válida
    expect(isNaN(producto.calificacion)).toBe(true); // Valida que la calificación no sea un número válido
  });
});

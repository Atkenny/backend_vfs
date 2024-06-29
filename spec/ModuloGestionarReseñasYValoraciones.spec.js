const { Cliente, Producto } = require('../src/ModuloGestionarReseñasYValoraciones');

describe('Módulo de Gestión de Reseñas y Valoraciones', function() {
  it('debería crear un cliente y una reseña de producto correctamente', function() {
    // Crear un cliente
    const cliente = new Cliente(1, 'Jorlenis', null, 'Gaitan', null);

    // Crear un producto con reseña
    const producto = new Producto(2, 'Collar de perlas', 0); // 0 = Aprobada

    // Validar que el cliente se haya creado correctamente
    expect(cliente.nombre1_cliente).toBe('Jorlenis');
    expect(cliente.apellido1_cliente).toBe('Gaitan');

    // Validar que el producto con reseña se haya creado correctamente
    expect(producto.nombre_producto).toBe('Collar de perlas');
    expect(producto.aprovacion).toBe(0); // Aprobada

    // Ejemplo de validación para reseña rechazada
    // const productoRechazado = new Producto(3, 'Otro producto', 1); // 1 = Rechazada
    // expect(productoRechazado.aprovacion).toBe(1); // Rechazada
  });
});

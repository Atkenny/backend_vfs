const validarProducto = require('../src/ModuloProducto');

describe('Validar Producto', function() {
  it('debería validar correctamente un producto válido', function() {
    const producto = {
      nombre_producto: 'Collar de perlas',
      precio_venta: 50.00,
      cantidad: 100
    };
    expect(validarProducto(producto)).toBe(true);
  });

  it('debería invalidar un producto con un nombre de producto muy largo', function() {
    const producto = {
      nombre_producto: 'Collar de perlas extremadamente largo que excede los treinta caracteres',
      precio_venta: 50.00,
      cantidad: 100
    };
    expect(validarProducto(producto)).toBe(false);
  });

  it('debería invalidar un producto con un precio de venta negativo', function() {
    const producto = {
      nombre_producto: 'Collar de perlas',
      precio_venta: -50.00,
      cantidad: 100
    };
    expect(validarProducto(producto)).toBe(false);
  });

  it('debería invalidar un producto con una cantidad negativa', function() {
    const producto = {
      nombre_producto: 'Collar de perlas',
      precio_venta: 50.00,
      cantidad: -10
    };
    expect(validarProducto(producto)).toBe(false);
  });

  it('debería invalidar un producto con un tipo de nombre incorrecto', function() {
    const producto = {
      nombre_producto: 12345,
      precio_venta: 50.00,
      cantidad: 100
    };
    expect(validarProducto(producto)).toBe(false);
  });

  it('debería invalidar un producto con un tipo de precio incorrecto', function() {
    const producto = {
      nombre_producto: 'Collar de perlas',
      precio_venta: '50.00',
      cantidad: 100
    };
    expect(validarProducto(producto)).toBe(false);
  });

  it('debería invalidar un producto con un tipo de cantidad incorrecto', function() {
    const producto = {
      nombre_producto: 'Collar de perlas',
      precio_venta: 50.00,
      cantidad: '100'
    };
    expect(validarProducto(producto)).toBe(false);
  });
});

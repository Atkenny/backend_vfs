const Pedido = require('../src/ModuloEntrega');

describe('Módulo de Entrega', function() {
  it('debería crear un pedido con estado de entrega correctamente', function() {
    // Crear un pedido con estado de entrega
    const pedido = new Pedido(1, 'En proceso');

    // Validar que el pedido se haya creado correctamente
    expect(pedido.id_pedido).toBe(1);
    expect(pedido.estado_entrega).toBe('En proceso');
  });
});

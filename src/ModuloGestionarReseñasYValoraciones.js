class Cliente {
    constructor(id_cliente, nombre1_cliente, nombre2_cliente, apellido1_cliente, apellido2_cliente) {
      this.id_cliente = id_cliente;
      this.nombre1_cliente = nombre1_cliente;
      this.nombre2_cliente = nombre2_cliente;
      this.apellido1_cliente = apellido1_cliente;
      this.apellido2_cliente = apellido2_cliente;
    }
  }
  
  class Producto {
    constructor(id_producto, nombre_producto, aprovacion) {
      this.id_producto = id_producto;
      this.nombre_producto = nombre_producto;
      this.aprovacion = aprovacion;
    }
  }
  
  module.exports = {
    Cliente,
    Producto
  };
  
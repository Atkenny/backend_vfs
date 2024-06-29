class Cliente {
    constructor(nombre1, nombre2, apellido1, apellido2) {
      this.nombre1 = nombre1;
      this.nombre2 = nombre2;
      this.apellido1 = apellido1;
      this.apellido2 = apellido2;
    }
  }
  
  class Producto {
    constructor(nombre_producto, calificacion) {
      this.nombre_producto = nombre_producto;
      this.calificacion = calificacion;
    }
  }
  
  module.exports = { Cliente, Producto };
  
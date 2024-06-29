function validarProducto(producto) {
    if (typeof producto.nombre_producto !== 'string' || producto.nombre_producto.length > 30) {
      return false;
    }
    if (typeof producto.precio_venta !== 'number' || producto.precio_venta <= 0) {
      return false;
    }
    if (typeof producto.cantidad !== 'number' || producto.cantidad < 0) {
      return false;
    }
    return true;
  }
  
  module.exports = validarProducto;
  
function validarCita(cita) {
    if (typeof cita.id_cita !== 'number' || cita.id_cita <= 0) {
      return false;
    }
    if (typeof cita.estado_cita !== 'boolean') {
      return false;
    }
    return true;
  }
  
  module.exports = validarCita;
  
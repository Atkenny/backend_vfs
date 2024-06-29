const validarCita = require('../src/ModuloCita');

describe('Validar Cita', function() {
  it('debería validar correctamente una cita con un ID válido y estado pendiente', function() {
    const cita = {
      id_cita: 1,
      estado_cita: true // Pendiente
    };
    expect(validarCita(cita)).toBe(true);
  });

  it('debería validar correctamente una cita con un ID válido y estado aprobado', function() {
    const cita = {
      id_cita: 2,
      estado_cita: false // Aprobado
    };
    expect(validarCita(cita)).toBe(true);
  });

  it('debería invalidar una cita con un ID no válido', function() {
    const cita = {
      id_cita: '01',
      estado_cita: true
    };
    expect(validarCita(cita)).toBe(false);
  });

  it('debería invalidar una cita con un estado no booleano', function() {
    const cita = {
      id_cita: 1,
      estado_cita: 'Pendiente'
    };
    expect(validarCita(cita)).toBe(false);
  });
});

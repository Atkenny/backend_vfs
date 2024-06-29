const express = require('express');
const mysql = require('mysql');
// const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json({ limit: '50mb' }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@kekodroid',
  // password: '2105Oney',
  database: 'database_vfs'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Configuración de la conexión a la segunda base de datos
const db2 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@kekodroid',
  // password: '2105Oney',
  database: 'datamart'
});

db2.connect((err) => {
  if (err) {
    console.error('Error de conexión a la segunda base de datos:', err);
  } else {
    console.log('Conexión exitosa a la segunda base de datos');
  }
});

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor backend en funcionamiento en el puerto ${port}`);
});

// Importar rutas CRUD y pasarlas a la aplicación
const crudRoutes = require('./routes/crudRoutes.js')(db);
app.use('/crud', crudRoutes);

// Importar y usar rutas para la segunda base de datos
const crudRoutes2 = require('./routes/crudRoutes2')(db2); // Pasa la instancia de la segunda base de datos a crudRoutesDb2
app.use('/crud2', crudRoutes2);


// Middleware para manejar errores de análisis JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).send({ error: 'Error en el análisis de JSON' });
  } else {
    next();
  }
});

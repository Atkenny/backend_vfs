const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Usamos process.env.PORT para el puerto si está configurado, de lo contrario, el puerto 5000

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json({ limit: '50mb' }));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor backend en funcionamiento en el puerto ${port}`);
});

// Importar rutas CRUD y pasarlas a la aplicación
const crudRoutes = require('./routes/crudRoutes.js')(db);
app.use('/crud', crudRoutes);

// Middleware para manejar errores de análisis JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).send({ error: 'Error en el análisis de JSON' });
  } else {
    next();
  }
});

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//Archivos estáticos
app.use(express.static(path.join(__dirname,  'public' )))

/* servidor */

app.listen(port,()=> console.log('Servidor corriendo en puerto ' + port))

/* rutas */

const mainRouter = require('./routers/main');

app.use('/', mainRouter);


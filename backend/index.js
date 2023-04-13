const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

require('./db');

// routes
app.use('/api/narrativa', require('./src/router/NarrativaRoute'));
app.use('/api/area', require('./src/router/AreaRoute'));
app.use('/api/genero/narrativo', require('./src/router/GeneroNarrativoRoute'));
app.use('/api/auth', require('./src/router/AuthRoute'));

// port
const port = 5050 ; //process.env.PORT ||

// listen.port
app.listen(port, () => {
    console.log(`Aplicacion en el puerto ${port}`);
});
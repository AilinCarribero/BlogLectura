const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../db');

exports.login = async (req, res) => {
    const data = req.body;
    console.log(data)
}

//Agrega un nuevo usuario
exports.registrar = async (req, res) => {
    const data = req.body;

    let password = await bcryptjs.hash(data.password, 10);//Encriptacion-> se pasa como parametro lo que se quiere encriptar y la cantidad de interaciones de encriptacion

    const dataSql = {
        nombre: data.nombre,
        email: data.email,
        auth_user: data.userAuth,
        password: password,
        rol: data.rol ? data.rol : 0
    };

    User.create(dataSql).then(response => {
        res.json(response);
        res.end();
    }).catch(error => {
        console.error(error);

        const response = {
            error,
            message: "Error al guardar el usuario"
        };

        if(error.original.code === "ER_DUP_ENTRY") {
            response.message = "Usuario de ingreso duplicado"
        }
        return res.json(response);
    })
}
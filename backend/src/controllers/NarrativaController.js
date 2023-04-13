const { Narrativa, Area, GeneroNarrativo } = require("../../db");

exports.listenNarrativas = (req, res) => {
    Narrativa.findAll({
        include: [{
            model: Area
        }, {
            model: GeneroNarrativo
        }],
        order: [['titulo', 'ASC']]
    }).then(response => {
        response.statusText = "Ok";
        response.status = 200;
        res.json(response);
    }).catch(err => {
        err.todoMal = "Error al obtener las narrativas";
        console.error(err);
        res.json(err);
        throw err;
    });
}
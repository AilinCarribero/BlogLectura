module.exports = (sequelize, type) => {
    return sequelize.define('narrativa', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: type.STRING(40)
        },
        texto: {
            type: type.TEXT
        },
        cita: {
            type: type.TEXT
        },
        url_img: {
            type: type.TEXT
        },
        id_genero: {
            type: type.INTEGER,
        },
        id_area: {
            type: type.INTEGER,
        },
        apto: {
            type: type.BOOLEAN
        }
    })
}
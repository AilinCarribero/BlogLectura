module.exports = (sequelize, type) => {
    return sequelize.define('genero-narrativo', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genero: {
            type: type.STRING(40)
        }
    })
}
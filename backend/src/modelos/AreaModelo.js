module.exports = (sequelize, type) => {
    return sequelize.define('area', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        area: {
            type: type.STRING(40)
        }
    })
}
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING(40)
        },
        email: {
            type: type.STRING(80),
            validator: {
                isEmail: true
            }
        },
        auth_user: {
            type: type.STRING(80),
            unique: true
        },
        password: {
            type: type.STRING(100)
        },
        rol: {
            type: type.INTEGER,
            isNumeric: true,
            defaultValue: 0
        }
    })
}
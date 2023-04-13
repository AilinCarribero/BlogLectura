const Sequelize = require('sequelize');

//Declaracion de modelos
const NarrativaModel = require('./src/modelos/NarrativaModel');
const GeneroNarrativoModel = require('./src/modelos/GeneroNarrativoModelo');
const AreaModel = require('./src/modelos/AreaModelo');
const UserModel = require('./src/modelos/AuthModel');

//Declaracion de la base de datos
const sequelize = new Sequelize("bloglecturas", "root", "root.root1997", {
    host: "localhost",
    port: "3306",
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        alter: true, // cuando se realice un cambio en algun modelo o relacion pasar a true
        modelName: 'singularName'
    },
});


//Utilizacion de los modelos
const Narrativa = NarrativaModel(sequelize, Sequelize);
const GeneroNarrativo = GeneroNarrativoModel(sequelize, Sequelize);
const Area = AreaModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

/*Conecto con la base de datos, verifico que esten los modelos creados, si no lo estan los crea y establece las relaciones entre los modelos
 logging tiene que pasar a true cuando se mande a produccion */
sequelize.sync({ force: false, logging: false }).then(() => {
    Narrativa.belongsTo(GeneroNarrativo, {foreignKey: 'id_genero', targertKey: 'id'});
    Narrativa.belongsTo(Area, {foreignKey: 'id_area', targertKey: 'id'});
    GeneroNarrativo.hasMany(Narrativa, {foreignKey: 'id', targertKey: 'id_genero'});
    Area.hasMany(Narrativa, {foreignKey: 'id', targertKey: 'id_area'});

    console.log('La sincronizacion con la base de datos fue un exito');
}).catch(err => {
    console.error(err)
})


//Exportacion
module.exports = {
    Narrativa, GeneroNarrativo, Area, User
}

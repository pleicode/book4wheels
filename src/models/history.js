'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    History.init({
        renterId: DataTypes.INTEGER,
        vehicleId: DataTypes.INTEGER,
        files: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};
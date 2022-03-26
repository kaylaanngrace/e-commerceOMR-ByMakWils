const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    // define id column
    id: {
      // type of data
      type: DataTypes.INTEGER,
      // doesn't allow null values
      allowNull: false, 
      // instruct that this the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define category name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

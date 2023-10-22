export const defineCategories = (sequelize:any, DataTypes:any) => {
  return sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: false,
  });
}
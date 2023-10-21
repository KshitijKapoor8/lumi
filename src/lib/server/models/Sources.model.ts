export const defineSources = (sequelize:any, DataTypes:any) => {
  return sequelize.define('Sources', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    tableName: 'sources',
    timestamps: false,
  });
}
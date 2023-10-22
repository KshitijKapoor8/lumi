export const defineCounts = (sequelize:any, DataTypes:any, Categories:any, Sources:any) => {
  return sequelize.define('Counts', {
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  }, {
    sequelize,
    tableName: 'counts',
    timestamps: false,
  });
} 
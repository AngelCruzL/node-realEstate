import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

import { databaseConfig } from '@config/database';

export const User = databaseConfig.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: DataTypes.STRING,
    isConfirmed: DataTypes.BOOLEAN,
  },
  {
    hooks: {
      beforeCreate: async function (user: any) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  },
);

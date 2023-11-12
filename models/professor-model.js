import { Sequelize } from 'sequelize'
import db from '../config/database.js'
import dotenv from 'dotenv'
dotenv.config()

const Professor = db.define(
  'professor',
  {
    matr_professor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nome_professor: {
      type: Sequelize.STRING(200),
    },
    email_professor: {
      type: Sequelize.STRING(100),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export { Professor }

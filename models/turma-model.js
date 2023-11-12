import { Sequelize } from 'sequelize'
import db from '../config/database.js'
import dotenv from 'dotenv'
dotenv.config()

const Turma = db.define(
  'turma',
  {
    id_turma: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nome_turma: {
      type: Sequelize.STRING(100),
    },
    turno_turma: {
      type: Sequelize.STRING(100),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export { Turma }

import { Sequelize } from 'sequelize'
import db from '../config/database.js'
import dotenv from 'dotenv'
dotenv.config()

const Curso = db.define(
  'curso',
  {
    id_curso: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nome_curso: {
      type: Sequelize.STRING(100),
    },

    id_turma: {
      type: Sequelize.INTEGER,
    },

    matr_professor: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export { Curso };

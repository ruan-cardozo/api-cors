import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import db from './src/config/database.js'
import { Curso } from './src/models/curso-model.js'
import { Professor } from './src/models/professor-model.js'
import { Turma } from './src/models/turma-model.js'
import { router as professorRoutes } from './src/routes/professor-routes.js'
import { router as cursoRoutes } from './src/routes/curso-routes.js'
import { router as turmaRoutes } from './src/routes/turma-routes.js'

const server = express()
server.use(express.json())
server.use(cors())
dotenv.config()

try {
  await db.authenticate()
  console.log('Conectado ao banco de dados')
} catch (e) {
  console.error('Erro ao conectar ao banco de dados', e)
}

server.use('/api', professorRoutes, cursoRoutes, turmaRoutes)

Curso.associate = (models) => {
  Curso.hasMany(models.Professor, {
    foreignKey: 'matr_professor',
    as: 'professores',
  })

  Curso.hasMany(models.Turma, {
    foreignKey: 'id_turma',
    as: 'turmas',
  })

  Curso.belongsTo(Turma, { foreignKey: 'id_turma', allowNull: true })
  Curso.belongsTo(Professor, { foreignKey: 'matr_professor', allowNull: true })
}

const port = process.env.SERVER_PORT
server.listen(port, () => {
  console.log('Servidor online', port)
})

export { server }

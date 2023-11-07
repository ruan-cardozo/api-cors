import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import dotenv from 'dotenv';
import routes from './routes/professor-routes.js';

import { Curso } from './models/curso-model.js';
import { Professor } from './models/curso-model.js';
import { Turma } from './models/curso-model.js';

const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());

try {
  await db.authenticate();
  console.log('Conectado ao banco de dados');
} catch (e) {
  console.error('Erro ao conectar ao banco de dados', e);
}

Curso.associate = (models) => {
  Curso.hasMany(models.Professor, {
    foreignKey: 'matr_professor',
    as: 'professores',
  })

  Curso.hasMany(models.Turma, {
    foreignKey: 'id_turma',
    as: 'turmas',
  })

  Curso.belongsTo(Turma, { foreignKey: 'id_turma', allowNull: true });
  Curso.belongsTo(Professor, { foreignKey: 'matr_professor', allowNull: true });
}

const port = process.env.SERVER_PORT;
server.listen(port, () => {
  console.log('Servidor online');
})


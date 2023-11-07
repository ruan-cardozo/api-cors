import { Express } from 'express';
import cors from 'cors';
import db from './config/database.js';
import routes from './routes/routes.js';
import { Curso } from './models/curso-model.js';
import { Professor } from './models/professor-model.js';
import { Turma } from './models/turma-model.js';
import dotenv from 'dotenv';

const server = express();
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


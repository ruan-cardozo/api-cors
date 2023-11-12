import { Turma } from '../models/turma-model.js';
import db from '../config/database.js';

export const getTurmas = async (req, res) => {
  try {
    await db.authenticate();
    const turmas = await Turma.findAll()
    res.send(turmas)
  } catch (e) {
    console.error('Ocorreu um erro ou buscar as turmas: ', e)
  }
}

export const createTurma = async (req, res) => {
  try {
    await Turma.create(req.body)
    res.json({
      message: 'Turma criada com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao criar uma turma: ', e)
  }
}

export const updateTurma = async (req, res) => {
  try {
    await Turma.update(req.body, {
      where: {
        id_turma: req.params.id_turma,
      },
    })
    res.json({
      message: 'A turma' + req.params.id_turma + 'atualizada com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao atualizar uma turma: ', e)
  }
}

export const deleteTurma = async (req, res) => {
  try {
    await Turma.destroy({
      where: { id_turma: req.params.id_turma },
    })
    res.json({
      message: 'A turma' + req.params.id_turma + 'deletada com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao deletar uma turma: ', e)
  }
}

export default {getTurmas, createTurma, updateTurma, deleteTurma};

import { Curso } from '../models/curso-model.js'
import db from '../config/database.js'

export const getCursos = async (req, res) => {
  try {
    await db.authenticate()
    const cursos = await Curso.findAll()
    res.send(cursos)
  } catch (e) {
    console.error('Ocorreu um erro ou buscar os cursos: ', e)
  }
}

export const createCurso = async (req, res) => {
  try {
    await Curso.create(req.body)
    res.json({
      message: 'Curso criado com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao criar um curso: ', e)
  }
}

export const updateCurso = async (req, res) => {
  try {
    await Curso.update(req.body, {
      where: {
        id_curso: req.params.id_curso,
      },
    })
    res.json({
      message: 'O curso' + ' ' + req.params.id_curso + ' ' + 'atualizado com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao atualizar um curso: ', e)
  }
}

export const deleteCurso = async (req, res) => {
  try {
    await Curso.destroy({
      where: { id_curso: req.params.id_curso },
    })
    res.json({
      message: 'O curso' + ' ' + req.params.id_curso + ' ' + 'deletado com sucesso!',
    })
  } catch (e) {
    console.error('Ocorreu um erro ao deletar um curso: ', e)
  }
}

export default {getCursos, createCurso, updateCurso, deleteCurso};
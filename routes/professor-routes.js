import express from 'express'
import professorController from '../controllers/professor-controller.js';

const router = express.Router()

router.get('/professores', professorController.getProfessores)
router.post('/professor/inserir', professorController.createProfessor)
router.put('/professor/editar/:matr_professor', professorController.updateProfessor)
router.delete('/professor/deletar/:matr_professor', professorController.deleteProfessor)

export { router }

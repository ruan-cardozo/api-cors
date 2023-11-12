import express from 'express'
import turmaController from '../controllers/turma-controller.js'
const router = express.Router()

router.get('/turmas', turmaController.getTurmas)
router.post('/turma/inserir', turmaController.createTurma)
router.put('/turma/editar/:id_turma', turmaController.updateTurma)
router.delete('/turma/deletar/:id_turma', turmaController.deleteTurma)

export { router }

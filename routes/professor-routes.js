import express from 'express';
import { getProfessores, createProfessor, updateProfessor, deleteProfessor } from '../controllers/professor-controller.js';

const router = express.Router();

router.get('/professores', getProfessores);
router.post('/professor/inserir', createProfessor);
router.put('/professor/editar/:matr', updateProfessor);
router.delete('/professor/deletar/:matr', deleteProfessor);

export default router;
import express from 'express';

const router = express.Router();

router.get('/professores', getProfessores);
router.post('/professor/inserir', createProfessor);
router.put('/professor/editar/:matr', updateProfessor);
router.delete('/professor/deletar/:matr', deleteProfessor);

export default router;
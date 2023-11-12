import express from 'express';
import cursoController from '../controllers/curso-controller.js';

const router = express.Router();

router.get('/cursos', cursoController.getCursos);
router.post('/curso/inserir', cursoController.createCurso);
router.put('/curso/editar/:id_curso', cursoController.updateCurso);
router.delete('/curso/deletar/:id_curso', cursoController.deleteCurso);

export {router};
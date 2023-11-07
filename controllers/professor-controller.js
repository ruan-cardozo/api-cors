import { professor } from "../models/curso-model";          

export const getProfessores = async (req, res) => {
    try {
        const professores = await professor.findAll();
        res.send(professores);
    } catch (e) {
        console.error('Ocorreu um erro ou buscar os professores: ', e);
    }
}

professor.findAll()

export const createProfessor = async (req, res) => {
    try {
        await professor.create(req.body);
        res.json({
            message: 'Professor criado com sucesso!'
        });
    } catch (e) {
        console.error('Ocorreu um erro ao criar um professor: ', e);
    } 
}

professor.create();
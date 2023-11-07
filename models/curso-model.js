import { Sequelize } from "sequelize";
import db from "../config/database.js";
import e from "cors";

const Curso = db.define("cursos", {
    id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_curso: {
        type: Sequelize.STRING(100),
    },

    id_turma: {
        type: Sequelize.INTEGER
    },

    matr_professor: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName:true
})

const Professor = db.define("professor", {
    matr_professor: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_professor: {
        type: Sequelize.STRING(200)
    },
    email_professor: {
        type: Sequelize.STRING(100)
    },
}, {
    timestamps:false,
    freezeTableName: true
})

const Turma = db.define("turma", {
    id_turma: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome_turma: {
        type: Sequelize.STRING(100)
    },
    turno_turma: {
        type: Sequelize.STRING(100)
    },
}, {
    timestamps: false,
    freezeTableName: true
})

export { Curso, Professor, Turma };
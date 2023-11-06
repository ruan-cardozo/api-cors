import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// const db = new Sequelize('teste', 'root', '',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;


const db = new Sequelize(dbHost, dbUser, dbPass,{
    host: dbHost,
    dialect: dbDialect
});

export default db;
import { Sequelize } from "sequelize";

const db = new Sequelize('projects_react_image','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
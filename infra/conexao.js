import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'db_api_teste_node'
});

conexao.connect();

export default conexao;
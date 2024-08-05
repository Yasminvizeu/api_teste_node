import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'db_api_teste_node'
});

conexao.connect();

/**
 * executa um cod com ou sem valores
 * @param {string} sql 
 * @param {string=id | [selecao,id]} valores 
 * @param {string} mensagemReject 
 * @returns 
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql,valores, (erro, resultado) => {
        if (erro) return reject(mensagemReject) 
        const row = JSON.parse(JSON.stringify(resultado))
        return resolve(row)
    })
})
}

export default conexao;
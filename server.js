import app from './src/app.js'
import conexao from './src/app/database/conexao.js';
const PORT = 3000;

//escutar a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
    });

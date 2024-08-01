import express from 'express';
import selecaoController from './app/controllers/selecaoController.js';

const app = express();

//indica para o express ler body com json
app.use(express.json());

function buscarSelecoesPorId(id){
    return selecoes.filter(selecao => selecao.id == id);
};

function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id);
};

// criar rotas
app.get('/selecoes',selecaoController.index);
app.get('/selecoes/:id',selecaoController.show);
app.post('/selecoes', selecaoController.store);
app.put('/selecoes/:id', selecaoController.update);
app.delete('/selecoes/:id', selecaoController.delete);

export default app;


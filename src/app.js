import express from 'express';
import routes from './routes.js';

const app = express();

// Indica para o express ler body com JSON
app.use(express.json());

// Usa routes.js
app.use(routes);

function buscarSelecoesPorId(id) {
  return selecoes.filter(selecao => selecao.id == id);
}

function buscaIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id);
}

export default app;

import express from 'express';

const app = express();

//indica para o express ler body com json
app.use(express.json());
//mock
const selecoes = [
    {id:1, selecao:'brasil', grupo:'G'}, 
    {id:2, selecao:'suica', grupo:'G'}, 
    {id:3, selecao:'camaroes', grupo:'G'}
];

function buscarSelecoesPorId(id){
    return selecoes.filter(selecao => selecao.id == id);
};

function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id);
};

// criar rota raiz
app.get('/', (req, res) => {
    res.send('Heloo world');
});
app.get('/selecoes',(req, res)=> {
    res.status(200).send(selecoes);
});
app.get('/selecoes/:id',(req,res) => {
    res.json(buscarSelecoesPorId(req.params.id))
});
app.post('/selecoes',(req,res) => {
    selecoes.push(req.body);
    res.status(201).send('selecao cadastrada com sucesso');
});
app.delete('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id);
    selecoes.splice(index, 1);
    res.send(`Seleção com id ${req.params.id} excluída com sucesso`);
});
app.put('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);
});
export default app;


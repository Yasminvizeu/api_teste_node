import express from 'express';

const app = express();

//mock
const selecoes = [
    {id:1, selecao:'brasil', grupo:'G'}, 
    {id:2, selecao:'suica', grupo:'G'}, 
    {id:3, selecao:'camaroes', grupo:'G'}
]

// criar rota raiz
app.get('/', (req, res) => {
    res.send('Heloo world');
});
app.get('/selecoes',(req, res)=> {
    res.status(200).send(selecoes);
});

export default app;


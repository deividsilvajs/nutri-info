import express from 'express';
import Database from './Database';

const app = express();

app.get('/:cod', (req, res) => {
    const { cod } = req.params;
    const alimento = Database.filter(alimento => alimento.cod === cod)[0];
    if (alimento) {
        res.send(alimento);
    } else {
        res.send('Alimento não encontrado');
    }
})

app.listen(8080, () => console.log('Server is running'));
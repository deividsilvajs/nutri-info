const express = require('express');
const Database = require('./Database.json');

const app = express();

app.get('/:cod', (req, res) => {
    const { cod } = req.params;
    const alimento = Database[cod];
    if (alimento) {
        res.send(alimento);
    } else {
        res.send('Alimento não encontrado');
    };
});

app.listen(8080, () => console.log('Server is running'));
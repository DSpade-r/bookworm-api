import express from 'express';
import path from 'path';

const app = express();

app.post('/api/auth', (req, res) => {
    res.status(400).json({errors: {global: 'Неправильные данные'}});
});

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8606, () => console.log('Running on loacalhost:8606'));
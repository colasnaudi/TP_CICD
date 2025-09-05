const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

app.get('/', (req, res) => {
    res.send('Hello world — serveur volontairement non optimisé mais fonctionnel');
});

app.get('/big', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'maybe-big-file.txt');
        const data = await fs.promises.readFile(filePath, 'utf8');
        res.send(data.replace(/\n/g, '<br/>'));
    } catch (err) {
        console.error("Erreur de lecture du fichier :", err.message);
        res.status(500).send('Erreur lors de la lecture du fichier ou fichier introuvable');
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
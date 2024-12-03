//global require
const express = require('express');
const path = require('path');
const hbs = require('hbs');

//local require
const games = require('./routes/Game.js');

//variable standard
const app = express();
const PORT = 3000;

//init standard
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.static("public"));

//route par default
app.get("/", (req, res) => {
    console.log(__dirname);
    res.send("/");
});

//route pour les jeux
app.use('/games', games);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
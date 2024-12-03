const express = require('express');
const path = require('path');   
const hbs = require('hbs');

const app = express();
const profondeur = "..";


const games = (req, res) => {
    console.log(path.join(__dirname, profondeur));
    res.render('Games');
};

const addGameGet = (req, res) => {
    console.log(path.join(__dirname, profondeur));
    res.render('addGame');
};

const addGamePost = (req, res) => {
    console.log(path.join(__dirname, profondeur));
    res.redirect(path.join(profondeur, "/games"));
};
module.exports = {games, addGameGet, addGamePost}
const express = require('express');
const path = require('path');   
const hbs = require('hbs');

const app = express();
const profondeur = "..";


const games = (req, res) => {
    console.log(__dirname);
    res.render('Games/game');
};

const gamesDetail = (req, res) => {
    console.log(__dirname);
    res.render('Games/gameDetail');
};

const addGameGet = (req, res) => {
    console.log(__dirname);
    res.render('Games/addGame');
};

const addGamePost = async (req, res) => {
    console.log(__dirname);
    // const { title } = req.body;
    // try {
    //     await prisma.games.create({
    //         data: { title },
    //     }); // Ici on ne stock pas le retour de la requête, mais on attend quand même son exécution
    //     res.status(201).redirect("/tasks"); // On redirige vers la page des tâches
    // } catch (error) {
    //     console.error(error);
    //     res.status(400).json({ error: "Task creation failed" });
    // }
    res.render(("Games/game"));
};

const modifGameGet = (req, res) => {
    console.log(__dirname);
    res.render('Games/addGame');
};

const modifGamePost = async (req, res) => {
    console.log(__dirname);
    res.render(("Games/game"));
};



module.exports = {games, addGameGet, addGamePost}
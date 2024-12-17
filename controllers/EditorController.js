const express = require('express');
const path = require('path');   
const hbs = require('hbs');

const app = express();
const profondeur = "..";


const editor = (req, res) => {
    console.log(__dirname);
    res.render(("Editor/editor"));
};

const editorDetail = (req, res) => {
    console.log(__dirname);
    res.render(("Editor/editorDetail"));
};

const addEditorGet = (req, res) => {
    console.log(__dirname);
    res.render('Editor/addEditor');
};

const addEditorPost = async (req, res) => {
    const { title } = req.body;
    try {
        await prisma.games.create({
            data: { title },
        }); // Ici on ne stock pas le retour de la requête, mais on attend quand même son exécution
        res.status(201).redirect("/tasks"); // On redirige vers la page des tâches
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Task creation failed" });
    }
    res.render(("Editor/editor"));
};

const modifEditorGet = (req, res) => {
    console.log(__dirname);
    res.render('Editor/addEditor');
};

const modifEditorPost = async (req, res) => {
    res.render(("Editor/editor"));
};

module.exports = {editor, addEditorGet, addEditorPost}
const express = require('express');
const path = require('path');   
const hbs = require('hbs');




const app = express();
const profondeur = "..";

const editorDAO = require(path.join(__dirname , profondeur, "DAO/EditorDAO.js"));

const editor = async (req, res) => {
    console.log(__dirname+__filename+":editor");
    const editor = await editorDAO.getAllEditor();
    console.log(editor);
    res.render(("Editor/editor"), {
        Editor : editor
    });
};

const editorPost = async (req, res) => {
    console.log(__dirname+__filename+":modifEditorGet");
    const { id, action } = req.body;
    console.log(id);
    if (action === "edit")
    {
        const editor = await editorDAO.getOneEditor(Number(id));
        res.render('Editor/addEditor', {
            editor
        });
    }
};

const editorDetail = (req, res) => {
    console.log(__dirname+__filename+":editorDetail");
    res.render(("Editor/editorDetail"));
};

const addEditorGet = (req, res) => {
    console.log(__dirname+__filename+":addEditorGet");
    res.render('Editor/addEditor', {
        id:0,
        name:""
    });
};

const addEditorPost = (req, res) => {
    console.log(__dirname+__filename+":addEditorPost");
    const { name } = req.body;
    try
    {
        editorDAO.addEditor(name);
        res.status(201).redirect("/Editor");
    }
    catch
    {
        res.status(400).json({ error: "Editor creation failed" });
    }
    res.redirect(("/Editor"));
};



module.exports = {editor, editorPost, editorDetail, addEditorGet, addEditorPost}
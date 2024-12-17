const express = require('express');
const path = require('path');   
const hbs = require('hbs');

const app = express();
const profondeur = "..";


const category = (req, res) => {
    console.log(__dirname);
    res.render(("category/category"));
};

const categoryDetail = (req, res) => {
    console.log(__dirname);
    res.render(("category/categoryDetail"));
};

module.exports = {category}
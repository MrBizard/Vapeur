const express = require('express');
const path = require('path');   
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const addEditor = async(name) => {
    console.log(__dirname+__filename+":addEditor");
    await prisma.editor.create({
        data: { name },
    });
};

const getAllEditor = async() => {
    console.log(__dirname+__filename+":getAllEditor");
    const editor = await prisma.editor.findMany();
    return editor;
};

const getOneEditor = async (id) => {
    console.log(__dirname+__filename+":getOneEditor");
    const editor = await prisma.editor.findUnique({where:{id:id}});
    return editor;
};

module.exports = {addEditor,getAllEditor,getOneEditor}
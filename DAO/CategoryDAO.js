const express = require('express');
const path = require('path');   
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

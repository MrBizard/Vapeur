const express = require('express');
const path = require('path');

const router = express.Router();
const pathname = path.join(__dirname, "..");

const { category} = require(pathname + "/controllers/CategoryController.js");

router.get('/', category);

module.exports = router;




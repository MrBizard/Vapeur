const express = require('express');
const path = require('path');

const router = express.Router();
const pathname = path.join(__dirname, "..");

const { games, addGameGet, addGamePost } = require(pathname + "/controllers/GameController.js");

router.get('/', games);

router.get("/addGame",addGameGet);
router.post("/addGame", addGamePost);

module.exports = router;




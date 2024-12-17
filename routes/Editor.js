const express = require('express');
const path = require('path');

const router = express.Router();
const pathname = path.join(__dirname, "..");

const { editor, addEditorGet, addEditorPost } = require(pathname + "/controllers/EditorController.js");

router.get('/', editor);

router.get("/addEditor",addEditorGet);
router.post("/addEditor", addEditorPost);

module.exports = router;




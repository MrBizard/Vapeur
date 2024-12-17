const express = require('express');
const path = require('path');

const router = express.Router();
const pathname = path.join(__dirname, "..");

const editorController = require(pathname + "/controllers/EditorController.js");

router.get('/', editorController.editor);
router.post('/', editorController.editorPost);

router.get("/addEditor",editorController.addEditorGet);
router.post("/addEditor", editorController.addEditorPost);

module.exports = router;




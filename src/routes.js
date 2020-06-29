const express = require('express')
const router = express.Router();
const RepositoryController = require('./RepositoryController');

router.get('/repositories', RepositoryController.all);
router.post('/repositories', RepositoryController.create);
router.delete('/repositories/:id', RepositoryController.delete);

module.exports = router;
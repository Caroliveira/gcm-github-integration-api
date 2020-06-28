const express = require('express')
const router = express.Router();
const RepositoryController = require('./RepositoryController');

router.get('/repositories', RepositoryController.all);
router.post('/repositories', RepositoryController.create);

module.exports = router;
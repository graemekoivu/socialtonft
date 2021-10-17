const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');

router.get('/', usersController.users_get_all); //, checkAuth

router.post('/signup', usersController.users_signup);

router.get('/activate_account', usersController.users_activate_account);

router.get('/:userId', checkAuth, usersController.users_get_user);

router.patch('/:userId', checkAuth, usersController.users_patch_user);

router.post('/login', usersController.users_login);

router.delete('/:userId', checkAuth, usersController.users_delete_user);

module.exports = router;
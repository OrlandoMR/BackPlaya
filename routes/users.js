const { Router } = require('express');
const { usersGet } = require('../controllers/users.controller');
const { check } = require('express-validator');
const router = Router();

router.post('/', [
    check('email', 'El correo no es valido').isEmail(),
], usersGet)

module.exports = router;
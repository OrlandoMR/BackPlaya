const { response } = require('express');
const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersGet = async(req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).send(errors);
    }
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    console.log(user);
    //Verificar correo
    emailExist = await User.findOne({ email });
    if (emailExist) {
        return res.status(400).json({
            msg: 'Este correo ya existe.'
        })

    }


    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        msg: "Aqui esta",
        user
    })
}

module.exports = {
    usersGet
}
// router.js

const express = require('express');
const { useRegister, useLogin } = require('../controller/user-controller'); 
const getProducts = require('../controller/product-controller')

const router = express.Router();


router.post('/register', useRegister);
router.post('/login', useLogin);

router.get('/products', getProducts)

module.exports = { router };

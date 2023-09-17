const {getCategory,postCategory} = require('../Controller/categoryController')

const route = require('express').Router();
const auth = require('../Middleware/auth')

route.get('/',getCategory);
route.post('/',auth,postCategory);

module.exports = route;
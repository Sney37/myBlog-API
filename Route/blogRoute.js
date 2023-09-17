const route = require('express').Router();
const auth = require('../Middleware/auth')
const {getBlog,postBlog} = require('../Controller/blogController');

route.get('/',getBlog);
route.post('/',auth,postBlog);

module.exports = route
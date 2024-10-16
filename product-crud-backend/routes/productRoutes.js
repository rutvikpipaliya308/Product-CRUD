const express = require('express');
const { addProduct } = require('../controllers/productController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', upload.single('image'), addProduct);

module.exports = router;

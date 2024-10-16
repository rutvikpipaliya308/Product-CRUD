const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const { name, price, categories } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    try {
        const product = new Product({ name, price, categories, imageUrl });
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

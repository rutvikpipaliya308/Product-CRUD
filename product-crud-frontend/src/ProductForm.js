import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState('');
    const [image, setImage] = useState(null);
    const { token } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('categories', categories);
        formData.append('image', image);

        await fetch('/api/products', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Add Product</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <input
                type="text"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                placeholder="Categories (comma separated)"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Add Product</button>
        </form>
    );
};

export default ProductForm;

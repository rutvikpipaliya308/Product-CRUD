import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            login(data.token);
            navigate('/product-form');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>

            <p className="mt-4">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 underline">Signup here</Link>
            </p>
        </form>
    );
};

export default Login;

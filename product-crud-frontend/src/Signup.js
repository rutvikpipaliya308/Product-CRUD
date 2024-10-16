import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert('Signup successful! Please login.');
            navigate('/login');
        } else {
            alert('Error during signup.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Signup</h2>
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
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Signup</button>
            <p className="mt-4">
                Already Creted account?
                <Link to="/login" className="text-blue-500 underline">Login</Link>
            </p>
        </form>
    );
};

export default Signup;

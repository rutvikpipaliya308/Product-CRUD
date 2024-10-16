// src/HomePage.js
import React from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
        console.log('Login button clicked');
    };

    const handleSignup = () => {
        navigate('/signup')
        console.log('Signup button clicked');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Our Application</h1>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                    <button
                        onClick={handleSignup}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

import React, { useState } from 'react';
import { TikTokIcon } from './Icons';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'test01' && password === 'test01') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-sm text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                <TikTokIcon className="w-10 h-10 text-white" fill="white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Log in to Get Coins</h1>
            <p className="text-gray-500 mb-6">Enter your credentials to continue.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                        aria-label="Username"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                        aria-label="Password"
                        autoComplete="current-password"
                    />
                </div>
                {error && <p className="text-red-500 text-sm text-left">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-red-600 transition-colors disabled:opacity-50 mt-2"
                >
                    Log In
                </button>
            </form>
        </div>
    </div>
  );
};

export default Login;

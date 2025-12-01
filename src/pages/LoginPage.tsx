import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(password)) {
            navigate('/dashboard');
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />

            <div className="glass-panel w-full max-w-md p-8 relative z-10">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent-primary">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-text-secondary">Enter your credentials to access the dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field pl-10"
                                placeholder="Enter password"
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                        </div>
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

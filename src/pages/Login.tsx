import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Lock, ShieldCheck, Terminal } from 'lucide-react';

export const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Access Denied: Invalid credentials.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] relative overflow-hidden">
            {/* Background Matrix-like effect (simplified) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)]" />
            </div>

            <Card className="w-full max-w-md relative z-10 border-t-4 border-t-[var(--color-secondary)]">
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-[var(--color-secondary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                        <ShieldCheck className="w-8 h-8 text-[var(--color-secondary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-wider">SECURE ACCESS</h2>
                    <p className="text-[var(--text-secondary)] text-sm mt-2 font-mono">AUTHORIZED PERSONNEL ONLY</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <Input
                        label="OPERATOR ID (EMAIL)"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        icon={<Terminal className="w-5 h-5" />}
                        placeholder="admin@network.local"
                    />

                    <Input
                        label="ACCESS KEY (PASSWORD)"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        icon={<Lock className="w-5 h-5" />}
                        placeholder="••••••••••••"
                    />

                    {error && (
                        <div className="bg-[var(--color-danger)] bg-opacity-10 border border-[var(--color-danger)] text-[var(--color-danger)] px-4 py-3 rounded text-sm font-mono">
                            ⚠ {error}
                        </div>
                    )}

                    <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                        AUTHENTICATE
                    </Button>
                </form>
            </Card>
        </div>
    );
};

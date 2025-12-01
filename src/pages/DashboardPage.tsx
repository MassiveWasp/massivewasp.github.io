
import { LogOut, Terminal, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ScriptCard } from '../components/ScriptCard';
import { dummyScripts } from '../data/dummyScripts';

export const DashboardPage = () => {
    const { logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="glass-panel rounded-none border-x-0 border-t-0 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent-primary/20 rounded-lg flex items-center justify-center text-accent-primary">
                            <Terminal size={20} />
                        </div>
                        <span className="font-bold text-lg">ScriptManager</span>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </header>

            <main className="flex-1 w-full mx-auto px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                            <p className="text-text-secondary">Manage and monitor your Python scripts</p>
                        </div>
                        <button className="btn-primary flex items-center gap-2">
                            <Plus size={18} />
                            New Script
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {dummyScripts.map((script) => (
                            <ScriptCard key={script.id} script={script} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

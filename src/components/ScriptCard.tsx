
import { Play, Square, AlertCircle, Clock } from 'lucide-react';
import type { Script } from '../data/dummyScripts';

interface ScriptCardProps {
    script: Script;
}

export const ScriptCard: React.FC<ScriptCardProps> = ({ script }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'running': return 'text-green-400';
            case 'stopped': return 'text-gray-400';
            case 'error': return 'text-red-400';
            default: return 'text-gray-400';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'running': return <Play size={16} />;
            case 'stopped': return <Square size={16} />;
            case 'error': return <AlertCircle size={16} />;
            default: return <Square size={16} />;
        }
    };

    return (
        <div className="glass-panel p-6 hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold mb-1">{script.name}</h3>
                    <p className="text-text-secondary text-sm">{script.description}</p>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 ${getStatusColor(script.status)}`}>
                    {getStatusIcon(script.status)}
                    <span className="text-xs font-medium uppercase tracking-wider">{script.status}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10 text-sm text-text-secondary">
                <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>Last run: {script.lastRun}</span>
                </div>
                <button className="ml-auto text-accent-primary hover:text-white transition-colors text-sm font-medium">
                    View Logs
                </button>
            </div>
        </div>
    );
};

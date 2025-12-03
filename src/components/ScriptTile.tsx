import React from 'react';
import { Card } from './Card';
import { Download, FileCode } from 'lucide-react';

interface ScriptTileProps {
    title: string;
    description: string;
    scriptlink: string;
    tag: string;
}

export const ScriptTile: React.FC<ScriptTileProps> = ({ title, description, scriptlink, tag }) => {
    return (
        <Card hover className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-[var(--bg-input)] rounded-lg">
                    <FileCode className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border-color)] px-2 py-1 rounded">
                    {tag}
                </span>
            </div>

            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">{description}</p>

            <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <code className="text-xs text-[var(--text-muted)]">{scriptlink}</code>
                <a
                    href={`/scripts/${scriptlink}`}
                    download
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3"
                >
                    <Download className="w-4 h-4 mr-2" />
                    GET
                </a>
            </div>
        </Card>
    );
};

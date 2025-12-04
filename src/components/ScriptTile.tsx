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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-3 py-1.5 text-sm rounded-md"
                >
                    <Download className="w-4 h-4 mr-2" />
                    GET
                </a>
            </div>
        </Card>
    );
};

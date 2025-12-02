import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Download, FileCode } from 'lucide-react';

interface ScriptTileProps {
    title: string;
    description: string;
    filename: string;
    category: string;
}

export const ScriptTile: React.FC<ScriptTileProps> = ({ title, description, filename, category }) => {
    const handleDownload = () => {
        // Mock download for now
        alert(`Downloading ${filename}...`);
    };

    return (
        <Card hover className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-[var(--bg-input)] rounded-lg">
                    <FileCode className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border-color)] px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">{description}</p>

            <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <code className="text-xs text-[var(--text-muted)]">{filename}</code>
                <Button size="sm" variant="outline" onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" />
                    GET
                </Button>
            </div>
        </Card>
    );
};

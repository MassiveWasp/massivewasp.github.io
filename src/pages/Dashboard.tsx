import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { ScriptTile } from '../components/ScriptTile';
import { LogOut, Server, Shield } from 'lucide-react';

const MOCK_SCRIPTS = [
    {
        id: 1,
        title: "VLAN Configuration",
        description: "Automated script to configure standard VLANs across access switches.",
        filename: "vlan_config.py",
        category: "SWITCHING"
    },
    {
        id: 2,
        title: "OSPF Setup",
        description: "Rapid deployment of OSPF areas and interface costs.",
        filename: "ospf_deploy.ansible",
        category: "ROUTING"
    },
    {
        id: 3,
        title: "Port Security Audit",
        description: "Scans interfaces for port security violations and generates a report.",
        filename: "audit_security.sh",
        category: "SECURITY"
    },
    {
        id: 4,
        title: "Firmware Upgrade",
        description: "Safe firmware upgrade procedure with rollback capability.",
        filename: "ios_upgrade.py",
        category: "MAINTENANCE"
    },
    {
        id: 5,
        title: "ACL Generator",
        description: "Generates standard ACLs based on policy definitions.",
        filename: "acl_gen.py",
        category: "SECURITY"
    },
    {
        id: 6,
        title: "Interface Reset",
        description: "Batch reset of error-disabled interfaces.",
        filename: "int_reset.tcl",
        category: "TROUBLESHOOTING"
    }
];

export const Dashboard: React.FC = () => {
    const { logout, currentUser } = useAuth();

    return (
        <div className="min-h-screen bg-[var(--bg-dark)]">
            {/* Header */}
            <header className="border-b border-[var(--border-color)] bg-[var(--bg-card)] sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Server className="w-6 h-6 text-[var(--color-secondary)]" />
                        <span className="text-xl font-bold tracking-tight">NET<span className="text-[var(--color-secondary)]">OPS</span> PORTAL</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                            <Shield className="w-4 h-4 text-[var(--color-success)]" />
                            <span>{currentUser?.email}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => logout()}>
                            <LogOut className="w-4 h-4 mr-2" />
                            LOGOUT
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Script Repository</h1>
                    <p className="text-[var(--text-secondary)]">Access and deploy verified network automation scripts.</p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_SCRIPTS.map((script) => (
                        <ScriptTile
                            key={script.id}
                            title={script.title}
                            description={script.description}
                            filename={script.filename}
                            category={script.category}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

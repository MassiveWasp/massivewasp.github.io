import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Network, Shield, Zap, ArrowRight } from 'lucide-react';

export const Landing: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-dark)] flex flex-col">
            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-secondary)] opacity-5 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-[var(--bg-input)] border border-[var(--border-color)] rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-[var(--text-secondary)]">SYSTEM ONLINE // V2.0.4</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Advanced Network <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]">
                            Automation Suite
                        </span>
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                        Secure repository for Cisco network engineering scripts, configurations, and automation tools.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/login">
                            <Button size="lg" className="w-full sm:w-auto group">
                                ACCESS PORTAL
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            VIEW DOCUMENTATION
                        </Button>
                    </div>
                </div>
            </main>

            {/* Features Grid */}
            <section className="border-t border-[var(--border-color)] bg-[var(--bg-card)] py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <Network className="w-10 h-10 text-[var(--color-secondary)] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Infrastructure Code</h3>
                        <p className="text-[var(--text-secondary)]">Standardized templates for switching and routing deployment.</p>
                    </div>
                    <div className="p-6">
                        <Shield className="w-10 h-10 text-[var(--color-secondary)] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Security First</h3>
                        <p className="text-[var(--text-secondary)]">Hardened configurations and audit scripts for compliance.</p>
                    </div>
                    <div className="p-6">
                        <Zap className="w-10 h-10 text-[var(--color-secondary)] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                        <p className="text-[var(--text-secondary)]">Zero-touch provisioning tools to speed up rollouts.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

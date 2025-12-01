export interface Script {
    id: string;
    name: string;
    description: string;
    status: 'running' | 'stopped' | 'error';
    lastRun: string;
}

export const dummyScripts: Script[] = [
    {
        id: '1',
        name: 'Data Scraper',
        description: 'Daily scraping job for market data analysis.',
        status: 'running',
        lastRun: '2 mins ago',
    },
    {
        id: '2',
        name: 'Email Notifier',
        description: 'Sends automated reports to stakeholders.',
        status: 'stopped',
        lastRun: '1 day ago',
    },
    {
        id: '3',
        name: 'Backup Service',
        description: 'Backs up database to cloud storage.',
        status: 'error',
        lastRun: '5 hours ago',
    },
    {
        id: '4',
        name: 'Image Processor',
        description: 'Resizes and optimizes uploaded images.',
        status: 'running',
        lastRun: 'Just now',
    },
];

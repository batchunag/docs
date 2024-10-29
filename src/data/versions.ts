import config from 'docs.config';


export interface VersionI {
    name: string;
    label?: string; // Optional - Shown in the version dropdown
    url: string;
}

// Ensure the first entry is the latest active version
export const versions: VersionI[] = [
    {
        name: `v${config.DOCS_LATEST_VERSION}`,
        label: 'latest',
        url: '/',
    },
    {
        name: 'v5.8',
        url: 'https://5.8.sourcegraph.com/'
    },
];

export const latestVersion = versions[0];

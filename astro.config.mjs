// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://llmspy.org',
	integrations: [
		react(),
		starlight({
			title: 'llms.py',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'llms.py logo'
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ServiceStack/llms' }
			],
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/ForceTheme.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				Header: './src/components/Header.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'API Keys', slug: 'getting-started/api-keys' },
						{ label: 'Configuration', slug: 'getting-started/configuration' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Web UI', slug: 'features/web-ui' },
						{ label: 'Server Mode', slug: 'features/server-mode' },
						{ label: 'Analytics & Metrics', slug: 'features/analytics' },
					],
				},
				{
					label: 'Multi-Modal',
					items: [
						{ label: 'Images', slug: 'multimodal/images' },
						{ label: 'Audio', slug: 'multimodal/audio' },
						{ label: 'Files', slug: 'multimodal/files' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'CLI Usage', slug: 'guides/cli-usage' },
						{ label: 'Use Cases', slug: 'guides/use-cases' },
						{ label: 'Docker Deployment', slug: 'guides/docker' },
						{ label: 'GitHub OAuth Setup', slug: 'guides/github-oauth' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshooting' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Providers', slug: 'reference/providers' },
						{ label: 'API Reference', slug: 'reference/api' },
						{ label: 'Changelog', slug: 'reference/changelog' },
					],
				},
			],
		}),
	],
});

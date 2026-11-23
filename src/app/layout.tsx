import React from "react"
import type { Metadata, Viewport } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/layout/theme-provider"
import { SITE_METADATA } from "@/lib/site-metadata"
import { AmbientCursor } from "@/components/layout/ambient-cursor"
import { PremiumBackground } from '@/components/layout/premium-background'
import { AccessibilityProvider } from "@/contexts/accessibility-context"
import { NavigationHubProvider } from "@/contexts/navigation-hub-context"
import { AccessibilityTools } from "@/components/blocks/accessibility-tools"
import { ClientShell } from "@/components/layout/client-shell"

import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
	metadataBase: new URL(SITE_METADATA.siteUrl),
	title: {
		default: SITE_METADATA.title,
		template: `%s | ${SITE_METADATA.title}`,
	},
	description: SITE_METADATA.description,
	keywords: [...SITE_METADATA.keywords],
	authors: [{ name: "Pankaj Jagadale", url: SITE_METADATA.siteUrl }],
	creator: "Pankaj Jagadale",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_METADATA.siteUrl,
		siteName: SITE_METADATA.siteName,
		title: SITE_METADATA.title,
		description: SITE_METADATA.description,
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: SITE_METADATA.title,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_METADATA.title,
		description: SITE_METADATA.description,
		images: ["/logo.png"],
	},
	icons: {
		icon: SITE_METADATA.favicon,
		shortcut: SITE_METADATA.favicon,
		apple: SITE_METADATA.favicon,
	},
	alternates: {
		canonical: "/",
	},
}

export const viewport: Viewport = {
	themeColor: '#0A0A0A',
}

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${SITE_METADATA.siteUrl}/#website`,
			"url": SITE_METADATA.siteUrl,
			"name": SITE_METADATA.siteName,
			"description": SITE_METADATA.description,
			"publisher": { "@id": `${SITE_METADATA.siteUrl}/#person` },
			"inLanguage": "en-US"
		},
		{
			"@type": "Person",
			"@id": `${SITE_METADATA.siteUrl}/#person`,
			"name": "Pankaj Jagadale",
			"url": SITE_METADATA.siteUrl,
			"image": {
				"@type": "ImageObject",
				"@id": `${SITE_METADATA.siteUrl}/#logo`,
				"url": `${SITE_METADATA.siteUrl}${SITE_METADATA.logo}`,
				"contentUrl": `${SITE_METADATA.siteUrl}${SITE_METADATA.logo}`,
				"caption": "Pankaj Jagadale"
			},
			"logo": { "@id": `${SITE_METADATA.siteUrl}/#logo` },
			"sameAs": [
				SITE_METADATA.social.github,
				SITE_METADATA.social.linkedin,
				SITE_METADATA.social.leetcode
			],
			"jobTitle": "Full Stack Developer"
		}
	]
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${manrope.variable} ${jetbrains.variable}`} suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="font-sans antialiased" suppressHydrationWarning>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<AccessibilityProvider>
						<NavigationHubProvider>
							<AmbientCursor />
							<PremiumBackground />
							<ClientShell>
								{children}
							</ClientShell>
							<AccessibilityTools />
						</NavigationHubProvider>
					</AccessibilityProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

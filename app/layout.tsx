import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dm-sans",
});

export const metadata: Metadata = {
	title: "Dr. Abdalla Ibrahim Abdalla Musa - Academic Portfolio",
	description:
		"PhD in Computer Science | Machine Learning Researcher | Lecturer at Qassim University. Specializing in Image Processing, Cybersecurity, and AI research.",
	generator: "OmerAlfiel.app",
	keywords: [
		"Computer Science",
		"Machine Learning",
		"Research",
		"Academic",
		"Qassim University",
		"Image Processing",
		"Cybersecurity",
		"Artificial Intelligence",
		"Deep Learning",
		"Publications",
	],
	authors: [
		{
			name: "Dr. Abdalla Ibrahim Abdalla Musa",
			url: "mailto:ab.musa@qu.edu.sa",
		},
	],
	creator: "Dr. Abdalla Ibrahim Abdalla Musa",
	publisher: "Dr. Abdalla Ibrahim Abdalla Musa",
	openGraph: {
		title: "Dr. Abdalla Ibrahim Abdalla Musa - Academic Portfolio",
		description:
			"PhD in Computer Science | Machine Learning Researcher | Lecturer at Qassim University",
		type: "website",
		locale: "en_US",
		alternateLocale: "ar_SA",
		siteName: "Dr. Abdalla Musa - Academic Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Dr. Abdalla Ibrahim Abdalla Musa - Academic Portfolio",
		description:
			"PhD in Computer Science | Machine Learning Researcher | Lecturer at Qassim University",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' dir='ltr'>
			<head>
				<link rel='icon' href='/logo.png' type='image/png' />
				<link rel='canonical' href='https://your-domain.com' />
				<meta name='theme-color' content='#15803d' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Dr. Abdalla Ibrahim Abdalla Musa",
							jobTitle: "Lecturer and Researcher",
							worksFor: {
								"@type": "Organization",
								name: "Qassim University",
								address: {
									"@type": "PostalAddress",
									addressCountry: "SA",
									addressLocality: "Qassim",
								},
							},
							email: ["ab.musa@qu.edu.sa", "abooodyibrahim@gmail.com"],
							alumniOf: [
								{
									"@type": "Organization",
									name: "Omdurman Islamic University",
								},
								{
									"@type": "Organization",
									name: "Periyar University",
								},
							],
							knowsAbout: [
								"Computer Science",
								"Machine Learning",
								"Image Processing",
								"Cybersecurity",
								"Artificial Intelligence",
							],
							sameAs: [
								// Add social media profiles when available
							],
						}),
					}}
				/>
			</head>
			<body
				className={`font-sans ${dmSans.variable} ${GeistMono.variable} antialiased`}>
				<Suspense fallback={null}>{children}</Suspense>
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}

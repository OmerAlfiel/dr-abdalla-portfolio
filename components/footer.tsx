"use client";

import { cvData } from "@/lib/cv-data";
import { Mail } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className='bg-muted border-t border-border relative z-10'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Contact Info */}
					<div>
						<h3 className='text-lg font-semibold text-foreground mb-4'>
							Contact
						</h3>
						<div className='space-y-2'>
							{cvData.personal.emails.map((email) => (
								<div
									key={email}
									className='flex items-center gap-2 text-muted-foreground'>
									<Mail className='h-4 w-4' />
									<a
										href={`mailto:${email}`}
										className='hover:text-primary transition-colors'>
										{email}
									</a>
								</div>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold text-foreground mb-4'>
							Quick Links
						</h3>
						<div className='grid grid-cols-2 gap-2'>
							<button
								onClick={() => scrollToSection("#about")}
								className='text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
								About
							</button>
							<button
								onClick={() => scrollToSection("#education")}
								className='text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
								Education
							</button>
							<button
								onClick={() => scrollToSection("#publications")}
								className='text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
								Publications
							</button>
							<button
								onClick={() => scrollToSection("#contact")}
								className='text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
								Contact
							</button>
						</div>
					</div>

					{/* Copyright */}
					<div>
						<h3 className='text-lg font-semibold text-foreground mb-4'>
							About
						</h3>
						<p className='text-sm text-muted-foreground'>
							© {currentYear} Dr. Abdalla Ibrahim Abdalla Musa. All rights
							reserved.
						</p>
						<p className='text-sm text-muted-foreground mt-2'>
							Machine Learning Researcher & Computer Science Lecturer
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

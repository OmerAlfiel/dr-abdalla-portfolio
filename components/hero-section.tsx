"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cvData } from "@/lib/cv-data";
import { Download, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SocialLinksDialog } from "./social-links-dialog";

export function HeroSection() {
	const [isVisible, setIsVisible] = useState(false);
	const [typedText, setTypedText] = useState("");
	const [showCursor, setShowCursor] = useState(true);

	const fullText = cvData.personal.subtitle;
	const name = cvData.personal.name;
	const title = cvData.personal.title;

	useEffect(() => {
		setIsVisible(true);
	}, []);

	useEffect(() => {
		if (!isVisible) return;

		let currentIndex = 0;
		const typingInterval = setInterval(() => {
			if (currentIndex <= fullText.length) {
				setTypedText(fullText.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 50);

		return () => clearInterval(typingInterval);
	}, [fullText, isVisible]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => clearInterval(cursorInterval);
	}, []);

	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToNext = () => {
		const element = document.querySelector("#about");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,128,61,0.1),transparent_50%)]' />
				<div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(132,204,22,0.05)_50%,transparent_75%)]' />
			</div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Content Side */}
					<div className='lg:order-1 text-center lg:text-left'>
						<div
							className={`transition-all duration-1000 delay-300 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight'>
								{name}
							</h1>
						</div>

						<div
							className={`transition-all duration-1000 delay-500 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<p className='text-xl sm:text-2xl text-primary font-semibold mb-6'>
								{title}
							</p>
						</div>

						<div
							className={`transition-all duration-1000 delay-700 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<div className='text-lg sm:text-xl text-muted-foreground mb-8 min-h-[3rem] flex items-center justify-center lg:justify-start'>
								<span className='text-balance'>
									{typedText}
									<span
										className={`${
											showCursor ? "opacity-100" : "opacity-0"
										} transition-opacity`}>
										|
									</span>
								</span>
							</div>
						</div>

						<div
							className={`transition-all duration-1000 delay-1000 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
								<Button
									size='lg'
									onClick={() => {
										const link = document.createElement("a");
										link.href = "/cv.pdf"; // Path to the CV file in the public directory
										link.download = "cv.pdf";
										link.click();
									}}
									className='bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer'>
									<Download className='mr-2 h-5 w-5' />
									Download CV
								</Button>
								<Button
									size='lg'
									variant='outline'
									onClick={scrollToContact}
									className='border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer'>
									<Mail className='mr-2 h-5 w-5' />
									Contact Me
								</Button>
								<SocialLinksDialog />
							</div>
						</div>

						<div
							className={`transition-all duration-1000 delay-1200 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<div className='mt-8 flex flex-wrap gap-2 justify-center lg:justify-start'>
								{cvData.specialization.interests
									.slice(0, 4)
									.map((interest, index) => (
										<span
											key={interest}
											className='px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium animate-float'
											style={{ animationDelay: `${1400 + index * 100}ms` }}>
											{interest}
										</span>
									))}
							</div>
						</div>
					</div>

					{/* Image Side */}
					<div className='lg:order-2 flex justify-center'>
						<div
							className={`transition-all duration-1000 delay-900 ${
								isVisible
									? "opacity-100 translate-y-0 scale-100"
									: "opacity-0 translate-y-8 scale-95"
							}`}>
							<div className='relative'>
								<div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-muted animate-pulse-glow'>
									<Image
										src='/placeholder.jpg?height=400&width=400'
										alt={`${name} - Portrait`}
										width={400}
										height={400}
										className='w-full h-full object-cover'
										priority
									/>
								</div>
								{/* Decorative Elements */}
								<div className='absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse' />
								<div className='absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-1000' />
								<div className='absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse delay-500' />
							</div>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div
					className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					}`}>
					<button
						onClick={scrollToNext}
						className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer'>
						<span className='text-sm font-medium'>Discover More</span>
						<ChevronDown className='h-6 w-6 animate-bounce group-hover:text-primary' />
					</button>
				</div>
			</div>
		</section>
	);
}

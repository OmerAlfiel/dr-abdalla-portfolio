"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const sections = [
			"hero",
			"about",
			"education",
			"research",
			"publications",
			"employment",
			"teaching",
			"admin",
			"training",
			"conferences",
			"contact",
		];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					console.log(
						"Observed section:",
						entry.target.id,
						"isIntersecting:",
						entry.isIntersecting
					);
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						console.log("Active section updated to:", entry.target.id);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px",
			}
		);

		sections.forEach((sectionId) => {
			const element = document.getElementById(sectionId);
			if (element) {
				observer.observe(element);
				console.log(`Observing section with ID: '${sectionId}'`);
			} else {
				console.warn(`Section with ID '${sectionId}' not found in the DOM.`);
			}
		});

		return () => {
			sections.forEach((sectionId) => {
				const element = document.getElementById(sectionId);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, []);

	const navItems = [
		{ label: "About", id: "about" },
		{ label: "Education", id: "education" },
		{ label: "Research", id: "research" },
		{ label: "Publications", id: "publications" },
		{ label: "Employment", id: "employment" },
		{ label: "Teaching", id: "teaching" },
		{ label: "Admin Work", id: "admin" },
		{ label: "Training", id: "training" },
		{ label: "Conferences", id: "conferences" },
		{ label: "Contact", id: "contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
					: "bg-transparent"
			}`}>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16 lg:h-20 gap-8'>
					{/* Logo/Name */}
					<div
						className='flex-shrink-0 cursor-pointer'
						onClick={() => {
							window.location.href = "/";
						}}>
						<h1 className='text-xl lg:text-2xl font-bold text-primary'>
							Dr. Abdalla Musa
						</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center space-x-4 xl:space-x-6'>
						{navItems.map((item) => (
							<div
								key={item.label}
								onClick={() => {
									const section = document.getElementById(item.id);
									if (section) {
										section.scrollIntoView({ behavior: "smooth" });
									}
								}}
								className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer hover:bg-primary/80 hover:text-primary-foreground ${
									activeSection === item.id
										? "bg-primary text-primary-foreground shadow-lg"
										: "text-foreground/70"
								}`}>
								{item.label}
							</div>
						))}
					</nav>
					{/* Mobile Menu Button */}
					<div className='flex items-center'>
						<Button
							variant='ghost'
							size='sm'
							className='lg:hidden'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							{isMobileMenuOpen ? (
								<X className='h-5 w-5' />
							) : (
								<Menu className='h-5 w-5' />
							)}
						</Button>
					</div>
				</div>
				{/* Mobile Navigation*/}
				{isMobileMenuOpen && (
					<div className='lg:hidden border-t border-border bg-background/95 backdrop-blur-md'>
						<nav className='py-4 space-y-2'>
							{navItems.map((item) => (
								<div
									key={item.label}
									onClick={() => {
										const section = document.getElementById(item.id);
										if (section) {
											section.scrollIntoView({ behavior: "smooth" });
										}
										setIsMobileMenuOpen(false);
									}}
									className={`block w-full text-left px-4 py-3 rounded-md transition-colors duration-300 cursor-pointer hover:bg-primary/80 hover:text-primary-foreground ${
										activeSection === item.id
											? "bg-primary text-primary-foreground"
											: "text-foreground/70"
									}`}>
									{item.label}
								</div>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}

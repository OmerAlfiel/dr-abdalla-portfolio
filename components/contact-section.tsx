"use client";

import { cvData } from "@/lib/cv-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Download, ExternalLink } from "lucide-react";

export function ContactSection() {
	const { toast } = useToast();

	const downloadCV = () => {
		const link = document.createElement("a");
		link.href = "/cv.pdf"; // Path to the CV file in the public directory
		link.download = "cv.pdf";
		link.click();
	};

	return (
		<section className='py-20 bg-transparent'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
						Contact
					</h2>
					<div className='w-24 h-1 bg-primary mx-auto rounded-full' />
					<p className='text-muted-foreground mt-4 max-w-2xl mx-auto'>
						I welcome collaboration opportunities and research inquiries. Feel
						free to reach out!
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='space-y-8'>
						{/* Contact Information */}
						<div>
							<h3 className='text-2xl font-semibold text-foreground mb-6 text-center'>
								Contact Information
							</h3>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
								{cvData.personal.emails.map((email, index) => (
									<Card
										key={email}
										className='bg-card/80 backdrop-blur-sm border-border shadow-lg'>
										<CardContent className='p-6'>
											<div className='flex items-center gap-4'>
												<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
													<Mail className='h-6 w-6 text-primary' />
												</div>
												<div className='flex-1'>
													<p className='text-sm text-muted-foreground mb-1'>
														{index === 0
															? "Personal Email"
															: "University Email"}
													</p>
													<a
														href={`mailto:${email}`}
														className='text-foreground font-medium hover:text-primary transition-colors'>
														{email}
													</a>
												</div>
											</div>
										</CardContent>
									</Card>
								))}

								<Card className='bg-card/80 backdrop-blur-sm border-border shadow-lg mb-8'>
									<CardContent className='p-6'>
										<div className='flex items-center gap-4'>
											<div className='w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center'>
												<MapPin className='h-6 w-6 text-secondary' />
											</div>
											<div className='flex-1'>
												<p className='text-sm text-muted-foreground mb-1'>
													Location
												</p>
												<p className='text-foreground font-medium'>
													Qassim University, Saudi Arabia
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>

							{/* Quick Actions */}
							<div>
								<h3 className='text-2xl font-semibold text-foreground mb-6 text-center'>
									Quick Actions
								</h3>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
									<Button
										onClick={downloadCV}
										className='justify-start h-auto p-4 bg-primary hover:bg-primary/90 cursor-pointer'>
										<Download className='mr-3 h-5 w-5' />
										<div className='text-left'>
											<p className='font-medium'>Download CV</p>
											<p className='text-sm opacity-90'>
												Download full CV in PDF format
											</p>
										</div>
									</Button>

									<Button
										variant='outline'
										className='justify-start h-auto p-4 bg-transparent border-border hover:bg-muted'
										asChild>
										<a href='#publications'>
											<ExternalLink className='mr-3 h-5 w-5' />
											<div className='text-left'>
												<p className='font-medium'>Publications</p>
												<p className='text-sm text-muted-foreground'>
													Browse research publications
												</p>
											</div>
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

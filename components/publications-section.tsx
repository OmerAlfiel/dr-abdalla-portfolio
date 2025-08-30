"use client";

import { useState, useMemo } from "react";
import { cvData, type Publication } from "@/lib/cv-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FileText, Search, Calendar, User, ExternalLink } from "lucide-react";

export function PublicationsSection() {
	const [searchTerm, setSearchTerm] = useState("");
	const [yearFilter, setYearFilter] = useState<string>("all");
	const [statusFilter, setStatusFilter] = useState<string>("all");
	const [sortBy, setSortBy] = useState<string>("newest");
	const [showAll, setShowAll] = useState(false);

	// Extract unique years from publications
	const availableYears = useMemo(() => {
		const years = cvData.publications
			.map((pub) => {
				const year = pub.date.match(/\d{4}/);
				return year ? year[0] : null;
			})
			.filter((year): year is string => year !== null)
			.sort((a, b) => Number.parseInt(b) - Number.parseInt(a));
		return Array.from(new Set(years));
	}, []);

	// Filter and sort publications
	const filteredPublications = useMemo(() => {
		const filtered = cvData.publications.filter((pub) => {
			const matchesSearch = pub.title
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
			const matchesYear = yearFilter === "all" || pub.date.includes(yearFilter);
			const matchesStatus =
				statusFilter === "all" || pub.status === statusFilter;

			return matchesSearch && matchesYear && matchesStatus;
		});

		// Sort publications
		filtered.sort((a, b) => {
			if (sortBy === "newest") {
				const yearA = Number.parseInt(a.date.match(/\d{4}/)?.[0] || "0");
				const yearB = Number.parseInt(b.date.match(/\d{4}/)?.[0] || "0");
				return yearB - yearA;
			} else if (sortBy === "oldest") {
				const yearA = Number.parseInt(a.date.match(/\d{4}/)?.[0] || "0");
				const yearB = Number.parseInt(b.date.match(/\d{4}/)?.[0] || "0");
				return yearA - yearB;
			} else if (sortBy === "title") {
				return a.title.localeCompare(b.title);
			}
			return 0;
		});

		return filtered;
	}, [searchTerm, yearFilter, statusFilter, sortBy]);

	const displayedPublications = showAll
		? filteredPublications
		: filteredPublications.slice(0, 6);

	return (
		<section className='py-20 bg-transparent'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
						Publications & Presentations
					</h2>
					<div className='w-24 h-1 bg-primary mx-auto rounded-full' />
					<p className='text-muted-foreground mt-4 max-w-2xl mx-auto'>
						A comprehensive collection of research publications and scientific
						papers in Computer Science and Machine Learning
					</p>
				</div>

				{/* Filters and Search */}
				<div className='max-w-6xl mx-auto mb-8'>
					<div className='bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 shadow-lg'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
							{/* Search */}
							<div className='relative'>
								<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
								<Input
									placeholder='Search publications...'
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className='pl-10'
								/>
							</div>

							{/* Year Filter */}
							<Select value={yearFilter} onValueChange={setYearFilter}>
								<SelectTrigger>
									<SelectValue placeholder='Year' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='all'>All Years</SelectItem>
									{availableYears.map((year) => (
										<SelectItem key={year} value={year}>
											{year}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							{/* Status Filter */}
							<Select value={statusFilter} onValueChange={setStatusFilter}>
								<SelectTrigger>
									<SelectValue placeholder='Status' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='all'>All Status</SelectItem>
									<SelectItem value='published'>Published</SelectItem>
									<SelectItem value='unpublished'>Unpublished</SelectItem>
								</SelectContent>
							</Select>

							{/* Sort */}
							<Select value={sortBy} onValueChange={setSortBy}>
								<SelectTrigger>
									<SelectValue placeholder='Sort' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='newest'>Newest First</SelectItem>
									<SelectItem value='oldest'>Oldest First</SelectItem>
									<SelectItem value='title'>By Title</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				{/* Results Count */}
				<div className='max-w-6xl mx-auto mb-6'>
					<p className='text-muted-foreground'>
						Showing {displayedPublications.length} of{" "}
						{filteredPublications.length} publications
					</p>
				</div>

				{/* Publications Grid */}
				<div className='max-w-6xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
						{displayedPublications.map((publication, index) => (
							<PublicationCard key={index} publication={publication} />
						))}
					</div>

					{/* Load More Button */}
					{filteredPublications.length > 6 && (
						<div className='text-center'>
							<Button
								variant='outline'
								onClick={() => setShowAll(!showAll)}
								className='bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer'>
								{showAll
									? "Show Less"
									: `Load More (${filteredPublications.length - 6})`}
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

interface PublicationCardProps {
	publication: Publication;
}

function PublicationCard({ publication }: PublicationCardProps) {
	const getTopicFromTitle = (title: string) => {
		if (
			title.toLowerCase().includes("machine learning") ||
			title.toLowerCase().includes("deep learning")
		) {
			return "Machine Learning";
		}
		if (
			title.toLowerCase().includes("cybersecurity") ||
			title.toLowerCase().includes("security")
		) {
			return "Cybersecurity";
		}
		if (
			title.toLowerCase().includes("network") ||
			title.toLowerCase().includes("manet")
		) {
			return "Networking";
		}
		if (
			title.toLowerCase().includes("image") ||
			title.toLowerCase().includes("classification")
		) {
			return "Image Processing";
		}
		if (title.toLowerCase().includes("blockchain")) {
			return "Blockchain";
		}
		return "Computer Science";
	};

	const getPublicationYear = (date: string) => {
		const year = date.match(/\d{4}/);
		return year ? year[0] : "Unknown";
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className='bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group'>
					<CardContent className='p-6'>
						<div className='flex items-start gap-4'>
							<div className='flex-shrink-0'>
								<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
									<FileText className='h-6 w-6 text-primary' />
								</div>
							</div>

							<div className='flex-1 min-w-0'>
								<div className='flex items-center gap-2 mb-2'>
									<Badge
										variant={
											publication.status === "published"
												? "default"
												: "secondary"
										}
										className='text-xs'>
										{publication.status}
									</Badge>
									<Badge variant='outline' className='text-xs'>
										{getTopicFromTitle(publication.title)}
									</Badge>
								</div>

								<h3 className='font-semibold text-foreground mb-3 leading-tight line-clamp-3 group-hover:text-primary transition-colors'>
									{publication.title}
								</h3>

								<div className='space-y-2 text-sm text-muted-foreground'>
									<div className='flex items-center gap-2'>
										<User className='h-4 w-4 flex-shrink-0' />
										<span className='truncate'>{publication.authors}</span>
									</div>

									<div className='flex items-center gap-2'>
										<Calendar className='h-4 w-4 flex-shrink-0' />
										<span>{getPublicationYear(publication.date)}</span>
									</div>
								</div>

								<div className='mt-4 flex items-center gap-2 text-primary text-sm font-medium'>
									<span>View Details</span>
									<ExternalLink className='h-4 w-4' />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</DialogTrigger>

			<DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle className='text-xl leading-tight pr-8'>
						{publication.title}
					</DialogTitle>
					<DialogDescription className='text-base'>
						<div className='space-y-4 mt-4'>
							<div className='flex flex-wrap gap-2'>
								<Badge
									variant={
										publication.status === "published" ? "default" : "secondary"
									}>
									{publication.status}
								</Badge>
								<Badge variant='outline'>
									{getTopicFromTitle(publication.title)}
								</Badge>
								<Badge variant='outline'>
									{getPublicationYear(publication.date)}
								</Badge>
							</div>

							<div className='space-y-3'>
								<div>
									<h4 className='font-semibold text-foreground mb-1'>Author</h4>
									<p className='text-muted-foreground'>{publication.authors}</p>
								</div>

								<div>
									<h4 className='font-semibold text-foreground mb-1'>
										Publication Date
									</h4>
									<p className='text-muted-foreground'>{publication.date}</p>
								</div>

								{publication.venue && (
									<div>
										<h4 className='font-semibold text-foreground mb-1'>
											Venue
										</h4>
										<p className='text-muted-foreground'>{publication.venue}</p>
									</div>
								)}

								<div>
									<h4 className='font-semibold text-foreground mb-1'>
										Abstract
									</h4>
									<p className='text-muted-foreground'>
										Abstract not available. Please refer to the full text for
										details.
									</p>
								</div>
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

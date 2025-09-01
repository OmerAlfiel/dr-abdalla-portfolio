import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

export function SocialLinksDialog() {
	const socialLinks = [
		{
			name: "ResearchGate",
			url: "https://www.researchgate.net/profile/Abdalla-Musa-2",
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<circle cx='12' cy='12' r='10' />
					<text
						x='12'
						y='16'
						textAnchor='middle'
						className='text-[12px] font-bold'
						fill='currentColor'>
						R
					</text>
				</svg>
			),
		},
		{
			name: "Google Scholar",
			url: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=E8DweMQAAAAJ",
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 24 24'
					fill='currentColor'>
					<path d='M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z' />
				</svg>
			),
		},
	];

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					size='lg'
					variant='outline'
					className='border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer transition-colors duration-300'>
					<Link2 className='mr-2 h-5 w-5' />
					Academic Profiles
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Academic Profiles</DialogTitle>
				</DialogHeader>
				<div className='flex flex-col gap-4 mt-4'>
					{socialLinks.map((link) => (
						<Button
							key={link.name}
							size='lg'
							variant='outline'
							onClick={() =>
								window.open(link.url, "_blank", "noopener,noreferrer")
							}
							className='border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer w-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]'>
							<span className='flex items-center justify-center gap-2'>
								<span className='w-5 h-5 flex items-center justify-center'>
									{link.icon}
								</span>
								<span className='ml-2 font-medium'>{link.name}</span>
							</span>
						</Button>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}

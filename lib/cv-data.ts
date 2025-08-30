export interface PersonalData {
	name: string;
	birth: string;
	emails: string[];
	title: string;
	subtitle: string;
}

export interface Education {
	degree: string;
	specialization: string;
	institution: string;
	year: string;
}

export interface Employment {
	position: string;
	workplace: string;
	period: string;
}

export interface Publication {
	title: string;
	authors: string;
	status: "published" | "unpublished";
	date: string;
	venue?: string;
}

export interface Training {
	title: string;
	date: string;
	location: string;
}

export interface Conference {
	type: string;
	title: string;
	date: string;
	location: string;
}

export interface Course {
	code: string;
	title: string;
}

export interface CVData {
	personal: PersonalData;
	education: Education[];
	specialization: {
		general: string;
		specific: string;
		interests: string[];
	};
	employment: Employment[];
	administrative: Array<{
		title: string;
		period: string;
	}>;
	publications: Publication[];
	training: Training[];
	conferences: Conference[];
	teaching: Course[];
}

export const cvData: CVData = {
	personal: {
		name: "Dr. Abdalla Ibrahim Abdalla Musa",
		birth: "Khartoum – Dec/28/1990",
		emails: ["abooodyibrahim@gmail.com", "ab.musa@qu.edu.sa"],
		title: "PhD in Computer Science",
		subtitle: "Machine Learning Researcher | Lecturer at Qassim University",
	},
	education: [
		{
			degree: "Ph.D.",
			specialization: "Computer Science",
			institution: "Omdurman Islamic University, Khartoum-Sudan",
			year: "2025",
		},
		{
			degree: "M.Sc.",
			specialization: "Computer Science & Application",
			institution: "Faculty of Science, Periyar University-India",
			year: "2013",
		},
		{
			degree: "B.Sc.",
			specialization: "Computer Science & Application",
			institution: "Faculty of Science, Periyar University-India",
			year: "2011",
		},
	],
	specialization: {
		general: "Computer Science",
		specific: "Machine Learning",
		interests: [
			"Image Processing",
			"Machine Learning",
			"Cybersecurity",
			"Networking",
			"Software Engineering",
			"Computer Languages",
			"Databases",
		],
	},
	employment: [
		{
			position: "Lecturer",
			workplace: "Qassim University",
			period: "2016 to Present",
		},
		{
			position: "Database Administrator",
			workplace: "HIGH LIFE INTERNATIONAL CO.LTD, KHARTOUM",
			period: "2013 to 2016",
		},
		{
			position: "Software Consultant",
			workplace: "CYBATE INFOTECH, ANDRAPRADESH-INDIA",
			period: "2011 to 2012",
		},
	],
	administrative: [
		{
			title: "Head of the System Support in computer college",
			period: "2023 to Present",
		},
		{
			title: "College Data Center Committee",
			period: "2020 to Present",
		},
		{
			title: "Examination Control Committee",
			period: "2016 to 2021",
		},
		{
			title: "E-learning Committee at college of computer-QU",
			period: "2019 to Present",
		},
		{
			title: "Rooms & Lab Committee, College of Computer-QU",
			period: "2019 to Present",
		},
		{
			title: "Sub-committee for Schedules at Qassim University",
			period: "2019 to 2020",
		},
		{
			title: "Quality Assurance and Accreditation prime, Computer college QU",
			period: "2020 to present",
		},
	],
	publications: [
		{
			title:
				"Indian Sign Language Detection and Translation Using Deep Learning",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "03 April 2025",
		},
		{
			title:
				"Adaptive Multi-Scale Feature Extraction for Cervical Cancer Classification Using Dynamic Hierarchical Pooling",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2025/4/1",
		},
		{
			title:
				"Neutrosophic Net-RBF Neural Networks with Bayesian Optimization Based Sentiment Analysis on Low Resource Language",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2025/2/1",
		},
		{
			title:
				"An Efficient Plant Disease Detection: Possibility Neutrosophic Hypersoft Set Approach with Whale Optimization Algorithm",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2025/2/1",
		},
		{
			title:
				"Attention-Guided Hybrid Network for Cervical Cancer Classification",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2025/1/25",
		},
		{
			title:
				"Smart Solutions for Climate Resilience Harnessing Machine Learning and Sustainable WSNs",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2025",
		},
		{
			title:
				"Robust Diabetic Retinopathy Detection and Grading using Neutrosophic Topological Vector Space on Fundus Imaging",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "1/1/2025",
		},
		{
			title:
				"Automated Credit Card Risk Assessment using Fuzzy Parameterized Neutrosophic Hypersoft Expert Set",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "1/1/2025",
		},
		{
			title:
				"Enhancing Network Security using Possibility Neutrosophic Hypersoft Set for Cyberattack Detection",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "1/1/2025",
		},
		{
			title:
				"AI-enabled risk identification and traffic prediction in vehicular Ad hoc Networks",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2024/8/30",
		},
		{
			title:
				"Efficient multipath model based cross layer routing techniques for Gauss Markov movable node management in MANET",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2024/8/30",
		},
		{
			title:
				"Integrating Machine Learning with Two-Person Intuitionistic Neutrosophic Soft Games for Cyberthreat Detection in Blockchain Environment",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2024/7/23",
		},
		{
			title:
				"Deep Learning, Ensemble and Supervised Machine Learning for Arabic Speech Emotion Recognition",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2024/4/2",
		},
		{
			title:
				"Navigating Resource Scarcity in a Changing Climate: AI-Powered Perspectives on Mental Health",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2024",
		},
		{
			title:
				"Improved Random Forest Algorithm for Cognitive Radio Networks' Distributed Channel and Resource Allocation Performance",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2023",
		},
		{
			title:
				"IoT Based Smart Agriculture to Avoid Post Harvest Losses Using Machine Learning Algorithms",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2023",
		},
		{
			title:
				"Integration of Fog Computing for Health Record Management Using Blockchain Technology - Computers, Materials & Continua, CMC, 2022, vol.71, no.2",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "07 December 2021",
		},
		{
			title:
				"A Study On Cybersecurity Awareness Among Sudanese Companies During Covid-19",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2022July",
		},
		{
			title: "Public-Key cryptography",
			authors: "Abdalla Ibrahim Abdalla Musa",
			status: "published",
			date: "2012/3/9",
		},
	],
	training: [
		{
			title: "Natural Learning Cycle (4MAT)",
			date: "Dec-2016",
			location: "Qassim University - University Development Deanship",
		},
		{
			title: "Skills of Active Learning and Effective Training (TOT)",
			date: "Dec-2016",
			location: "Qassim University - University Development Deanship",
		},
		{
			title: "SPSS Application in Scientific Research",
			date: "Dec-2017",
			location: "Qassim University - University Development Deanship",
		},
		{
			title: "Designing and creating courses using Blackboard LMS",
			date: "2018",
			location:
				"Deanship of E-learning and Distance Education – Qassim University",
		},
		{
			title: "Blackboard Collaborate Ultra",
			date: "2018",
			location:
				"Deanship of E-learning and Distance Education – Qassim University",
		},
		{
			title: "Electronic Exams and How to Use Them for E-learning",
			date: "2017",
			location:
				"Deanship of E-learning and Distance Education – Qassim University",
		},
		{
			title: "Blackboard Learning Management System",
			date: "2017",
			location:
				"Deanship of E-learning and Distance Education – Qassim University",
		},
		{
			title: "Using Blackboard for Higher Education",
			date: "2018",
			location:
				"Deanship of E-learning and Distance Education – Qassim University",
		},
		{
			title: "Python for Data Science and Machine Learning Bootcamp",
			date: "2020-2021",
			location: "Online course provided by Udemy.com",
		},
		{
			title:
				".NET Technology Specialist Framework 4.0 (Web App and Windows App’s, WCF, WPF, and Testing Tools)",
			date: "2013",
			location:
				"Certified from Microsoft (U.S.A), Naresh Institute Of Technology, Ameerpet Hyderabad-India",
		},
		{
			title: "CCNA (Routing And Switching)",
			date: "2012",
			location: "Net Expert of Information Technology, Hyderabad-India",
		},
		{
			title: "Net Expert Of Information Technology",
			date: "2012",
			location: "Net Expert of Information Technology, Hyderabad-India",
		},
	],
	conferences: [
		{
			type: "Conference",
			title:
				"Efficient multipath model based cross layer routing techniques for Gauss Markov movable node management in MANET",
			date: "2024/8/30",
			location: "AIP Conference Proceedings",
		},
		{
			type: "Conference",
			title: "Facets of Business Excellence and Computational Intelligence",
			date: "March 2012",
			location:
				"Vysya Institute of Management Studies and Technology, Salem, Tamilnadu – India",
		},
		{
			type: "Seminar",
			title: "ANVAYA 12 National Level Technical Meet",
			date: "Oct-2012",
			location: "Ethiraj College For Women – Chennai - India",
		},
		{
			type: "Seminar",
			title: "WAVSUP'12 National Level MCA",
			date: "Oct-2012",
			location: "Mahendra Institute of Technology, Tamilnadu-India",
		},
	],
	teaching: [
		{
			code: "ITBS202",
			title: "Introduction to Programming (Applied College)",
		},
		{
			code: "CSC203",
			title: "MATLAB (Science College)",
		},
		{
			code: "CS 222",
			title: "Operating System",
		},
		{
			code: "ITBS103",
			title: "Basic of Programming (Applied College)",
		},
		{
			code: "IT 131",
			title: "Data Base",
		},
		{
			code: "CS 181",
			title: "Computer Programming II",
		},
		{
			code: "CS 182",
			title: "Object-Oriented Programming",
		},
		{
			code: "CS 214",
			title: "Data Structure",
		},
		{
			code: "CS 352",
			title: "Computer Networks",
		},
		{
			code: "CS 432",
			title: "Artificial Intelligence LAB",
		},
		{
			code: "CS 101",
			title: "Introduction to Computer",
		},
		{
			code: "CS 202",
			title: "Introduction to Computer & Internet",
		},
	],
};

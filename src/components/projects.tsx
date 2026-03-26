import { ExternalLink, Github } from "lucide-react";
import { Button } from "./subcomponents/button";
import { Badge } from "./subcomponents/badge";
import polldynamics from "../assets/polldynamics.png";
import rehomematt from "../assets/rehomematt.png";
import portfolio from "../assets/portfolio.png";

export function Projects() {
    const projects = [
        {
            title: 'Dynamic Online Poll System',
            description: 'A web based online polling system that enables users to sign in, create, share and participate in polls with real time vote tracking. Features include public and private poll options, user authentication and interactive data visualization.',
            technologies: ['React', 'Redux', 'REST APIs', 'Chart.js','Typescript', 'Tailwind CSS'],
            image: polldynamics,
            githubUrl: 'https://github.com/Vx-tech-2024/alx-project-nexus/tree/main/alx-online_poll_system',
            liveUrl: 'https://polldynamics.netlify.app/',
            features: [
                'User Authentication: Sign up, login and manage account settings.',
                'Poll Creation and Management: Create polls with multiple question types (2 options min, multiple choice, text input).',
                'Real-time Voting and vote counting update: Users can vote on polls and see live results with interactive charts.',
                'Public and Private Polls: Option to create public polls visible to all users or private polls accessible only via unique links.',
                'Poll Sharing: Share polls via unique URLs or social media integration.',
                'Interactive charts and analytics Dashboard',
            ],
        },
        {
            title: 'Rehome Matt Marketplace',
            description: 'A web application that serves as a second hand market place platform for buying and selling used items. Built with firebase authentication.',
            technologies: ['React', 'Firebase', 'Local Storage', 'Google auth', 'Responsive Design', 'Tailwind CSS'],
            image: rehomematt,
            githubUrl: 'https://github.com/Vx-tech-2024/rehome-matt',
            liveUrl: 'https://vx-tech-2024.github.io/rehome-matt/',
            features: [
                'Google authentication',
                'Image upload and management',
                'Search and filter items',
                'User Listing dashboard',
            ],
        },
        {
            title: 'Personal Portfolio Website',
            description: 'A responsive personal portfolio website showcasing projects, skills and professional experience. Built with React and Tailwind css.',
            technologies: ['React', 'Typescript', 'Tailwind CSS', 'Responsive Design'],
            image: portfolio,
            githubUrl: 'https://github.com/Vx-tech-2024/PortfolioWebsite',
            liveUrl: 'https://jportfoliowebsite.netlify.app/',
            features: [
                'Smooth scrolling Navigation',
                'Responsive Design',
                'Resume Download',
                'Contact form integration',
            ],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A selection of my recent work and personal projects that demonstrate my technical skills.
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${ index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                            <div className="lg:w-1/2">
                                <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                                    <img 
                                       src={project.image}
                                       alt={project.title}
                                       className="w-full h-80 object-cover"
                                    />
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="text-gray-700 flex items-start">
                                                <span className="text-blue-600 mr-2">-</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="border-blue-600 text-blue-600">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Button 
                                       asChild
                                       variant="default"
                                       className="bg-blue-600 hover:bg-blue-700"
                                    >
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github size={18} className="mr-2" />
                                            View Code
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="border-blue-600 text-blue-600">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={18} className="mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
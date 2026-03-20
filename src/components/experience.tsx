import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
    const experience = [
        {
            title:'Implementation Intern/Trainee',
            company: 'NLS Tech Solutions',
            Type: 'Onsite',
            period: 'September 2025 - February 2026',
            responsibilities: [
                 'Assisted in the implementation of software solutions for clients, including requirements gathering, system configuration, and testing.',
                 'Worked with REST APIs and system integrations across different platforms',
                 'Participated in full software system production cycle',
                 'Gained hands on experience on CI/CD pipelines and Devops Practices',
                 'Participated in system designing, testing and documentation',
                 'Created and implemented queries on oracle database'
            ],
            technologies: ['REST APIs', 'CI/CD', 'DevOps', 'Oracle Database', 'System Design'],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p  className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My journey in the Software engineering field and the experience that is shaperning my creer path.
                    </p>
                </div>

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <Briefcase className="text-blue-600 mr-3" size={24} />
                                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                                    </div>
                                    <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                                </div>
                                <div className="lg:text-right mt-2 lg:mt-0">
                                    <div className="flex items-center text-gray-600 mb-1 lg:justify-end">
                                        <Calendar size={16} className="mr-2" />
                                        <span className="font-medium">{exp.period}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 lg:justify-end">
                                        <MapPin size={16} className="mr-2" />
                                        <span>{exp.Type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="text-gray-700 flex items-start">
                                            <span className="text-blue-600 mr-3 mt-1">-</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">-Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
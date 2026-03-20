import { Badge } from './subcomponents/badge';

export function Skills() {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: ['Javascript', 'Typescript', 'React', 'HTML', 'CSS', 'Responsive Design', 'Redux'],
        },
        {
            category: 'Backend & APIs',
            skills: ['node js', 'REST APIs', 'API Integration', 'Postman', 'Oracle Database querying'],
        },
        {
            category: 'Cloud & DevOps',
            skills: ['Terraform', 'Azure', 'API Gateway (APIGEE)', 'CI/CD'],
        },
        {
            category: 'Tools and others',
            skills: ['Git', 'Github', 'SQL', 'Bash', 'Networking', 'Firebase'],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        These are the tools of modern technologies and environments I use in building applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm" variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
                        <h3 className="text-2xl font-semibold mb-2">Continuous Learning</h3>
                        <p className="text-blue-100">
                            Always learning new technologies and evolving ones to stay at the forefront of web development
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
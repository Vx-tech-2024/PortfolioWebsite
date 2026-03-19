import { Code, Rocket, GraduationCap, Target } from 'lucide-react';

export function About() {
    const highlights = [
        {
            icon: GraduationCap,
            title: "Education",
            description: 'Mathematics and Computer Science student with interest in software development.',
        },
        {
            icon: Code,
            title: 'Technical Skills',
            description: 'Proficient in Javascript, React and modern web development tools',
        },
        {
            icon: Rocket,
            title: 'Cloud & APIs',
            description: 'Learning and Training in Azure, Terraform and API Integrations',
        },
        {
            icon: Target,
            title: 'Career Goals',
            description: 'Getting fully exposed in the web application development field and building user friendly applications.',
        },
    ];

    return (
        <section id='about' className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-4'>About Me</h2>
                    <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
                </div>

                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div>
                        <img 
                            src="" 
                            alt="Developer Workspace"
                            className='rounded-lg shadow-xl w-full object-cover h-96'
                        />
                    </div>
                    <div>
                        <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                            I am a curious developer with a foundation in Mathematics and Computer Science. My interest in software development has enabled me in getting skills in front end web development and undertaking a course in Prodev web development to certification. Majorly I am confident in tools like React, Typescript, Javascript along with some knowledge in cloud infrastructure and API management.
                        </p>
                        <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                            I thrive in developing user friendly and enticing web applications that make it easier for their navigation and usage. My experience has been gained over building systems like dynamic poll system, market platform and others. I always prioritize the user's experience in using the system and the functionality.
                        </p>

                        <div className='grid sm:grid-cols-2 gap-6'>
                            {highlights.map((item, index) => (
                                <div key={index} className='flex items-start space-x-3'>
                                    <div className='p-2 bg-blue-100 rounded-lg'>
                                        <item.icon className='text-blue-600' size={24} />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-gray-900 mb-1'>{item.title}</h3>
                                        <p className='text-sm text-gray-600'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
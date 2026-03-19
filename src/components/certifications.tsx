import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "./subcomponents/button";

export function Certifications() {
    const certifications = [
        {
            title: 'Prodev Frontend Software Engineering',
            issuer: 'ALX Software Engineering Program',
            date: 'February 2026',
            credentialId: 'XRE75ZC3ro',
            description: 'Comprehensive frontend software engineering program covering HTML5, CSS -Tailwind, JavaScript, React and modern frontend development practices.',
            certificateUrl: 'https://drive.google.com/file/d/1hxVOtOD0cXOi0BCFDHQXdtS0sFUX08R5/view?usp=sharing',
        },
        {
            title: 'Terraform on Microsoft Azure Cloud',
            issuer: 'Udemy',
            date: 'July 2025',
            credentialId: 'N/A',
            description: 'Infrastructure as Code with terraform on Microsoft Azure Cloud Platform',
            certificateUrl: 'https://drive.google.com/file/d/1dR_VWO1u1kuV7y7vEZ_srYhIInQvmbom/view?usp=sharing',
        },
        {
            title: 'APIGEE API Gateway & Management',
            issuer: 'Udemy',
            date: 'July 2025',
            credentialId: 'UC-9492610c-6b26-4d33-830f-386bef3c3508',
            description: 'API design, development, security and analytics using Google Apigee Platform',
            certificateUrl: 'https://drive.google.com/file/d/1UIAWgSnsjrtrxzSC9NKI-7CWCLGK43K5/view?usp=sharing',
        },
        {
            title: 'Postman API fundamentals',
            issuer: 'Postman',
            date: 'October 2024',
            credentialId: 'Postman',
            description: 'API design, testing, documentation and automation using Postman tools',
            certificateUrl: '#',
        },
        {
            title: 'Cisco Networking Certification',
            issuer: 'Cisco Networking Academy',
            date: 'May 2025',
            credentialId: 'Cisco-net',
            description: 'Comprehensive Networking fundamentals including TCP/IP, routing and network security.',
            certificateUrl: 'https://drive.google.com/file/d/16LlX9X81IuGoy2myZArHjbUzXEJDPRrc/view?usp=sharing',
        },
        {
            title: 'Professional Development Skills for Digitial Age',
            issuer: 'ALX Africa',
            date: 'September 2025',
            credentialId: 'M75rEBLoGc',
            description: 'Professional development skills including communication, teamwork, problem-solving and leadership.',
            certificateUrl: 'https://drive.google.com/file/d/1BLpowP7bzJhVZsqou-9mAXSQ3isPtQTQ/view?usp=sharing',
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional certifications demonstrating my expertise in the various technologies and platforms
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-600">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Award className="text-blue-600" size={28} />
                                    </div>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="text-blue-600 hover:text-blue-700">
                                           <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={18} />
                                           </a>
                                    </Button>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{cert.title}</h3>
                                <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{cert.description}</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center text-gray-600">
                                        <Calendar size={16} className="mr-2" />
                                        <span>{cert.date}</span>
                                    </div>
                                    <div className="text-gray-500">
                                        <span className="font-medium">ID:</span> {cert.credentialId}
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
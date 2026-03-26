import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "./subcomponents/button";
import { Input } from "./subcomponents/input";
import { TextArea } from "./subcomponents/textarea";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send email, save to database)
        alert('Thank you for the message but this function is not yet implemented');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'joelgeorge6505@gmail.com',
            link: 'mailto:joelgeorge6505@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+254 713 018 165',
            link: 'tel:+254713018165',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Nairobi, Kenya',
            link: 'https://www.google.com/maps/place/Nairobi,+Kenya',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            url: 'https://github.com/Vx-tech-2024',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/joel-george-37a090330',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I am always open to discussing new projects, creative ideas or opportuinities to be part of your development vision.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/*contact info*/}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Contact Information</h3>
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <info.icon className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                                        {info.link ? (
                                            <a 
                                               href={info.link}
                                               className="text-gray-700 hover:text-blue-600 transition-colors">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-700">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                       key={index}
                                       href={social.url}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                                       aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-700 to-blue-300 rounded-lg text-white">
                            <h4 className="text-xl font-semibold mb-2">Let's build together</h4>
                            <p className="text-blue-100">
                                If you have an inquiry to make, a project to discuss or just wanna say hi, reach out to me and I will get back to you.
                            </p>
                        </div>
                    </div>

                    {/*contact form*/}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your name
                                </label>
                                <Input
                                   id='name'
                                   name="name"
                                   type="text"
                                   required
                                   value={formData.name}
                                   onChange={handleChange}
                                   placeholder="Enter your name"
                                   className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your email
                                </label>
                                <Input 
                                   id="email"
                                   name="email"
                                   type="email"
                                   required
                                   value={formData.email}
                                   onChange={handleChange}
                                   placeholder="Enter your email"
                                   className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <Input 
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Discussion, Inquiry etc"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows={6}
                                    className="w-full"
                                />
                            </div>

                            <Button 
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                size="lg"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
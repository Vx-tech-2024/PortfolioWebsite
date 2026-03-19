import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./subcomponents/button";

export function Home() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <div className="mb-6">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                            JG
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                        Joel George
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-6">
                        Certified Frontend Developer | API Integration | Interested in Cloud Computing
                    </p>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Mathematics and Computer Science Student at JKUAT and interested ; certified in building web applications using javascript and its libraries and frameworks.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button 
                           onClick={() => scrollToSection('projects')}
                           size="lg"
                           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                        >
                            View Projects
                        </Button>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            variant="outline"
                            size="lg"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg "
                        >
                            Contact Me
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                          href="https://github.com/Vx-tech-2024"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-100 text-gray-700 hover:text-blue-600 transition-all">
                            <Github size={24} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/joel-george-37a090330"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-blue-600 transition-all">
                            <Linkedin size={24} />
                        </a>
                        <a
                          href="mailto:joelgeorge6505@gmail.com"
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-blue-600 transition-all">
                            <Mail size={24} />
                        </a>
                    </div>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="mt-16 animate-bounce text-gray-400 hover:text-blue-600 transition-colors">
                        <ArrowDown size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
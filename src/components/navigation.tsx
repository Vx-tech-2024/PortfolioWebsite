import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <button 
                          onClick={() => scrollToSection('home')}
                          className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors">
                            Joel George
                        </button>

                        {/*Navigation in the desktop*/}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button 
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/*Navigation in mobile view*/}
                        {isMobileMenuOpen && (
                            <div className="md:hidden py-4 space-y-2">
                                {navItems.map((item) => (
                                    <button 
                                      key={item.id}
                                      onClick={() => scrollToSection(item.id)}
                                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors">
                                        {item.label}
                                      </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
    );
}
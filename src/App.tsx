import { Navigation } from './components/navigation';
import { Home } from './components/home';
import { About } from './components/about';
import { Certifications } from './components/certifications';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Home />
        <About />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
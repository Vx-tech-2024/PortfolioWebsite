import { Navigation } from './components/navigation';
import { Home } from './components/home';
import { About } from './components/about';
import { Certifications } from './components/certifications';
import { Contact } from './components/contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Home />
        <About />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
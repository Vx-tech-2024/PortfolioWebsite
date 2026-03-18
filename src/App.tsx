import { Navigation } from './components/navigation';
import { Home } from './components/home';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Home />
      </main>
    </div>
  );
}
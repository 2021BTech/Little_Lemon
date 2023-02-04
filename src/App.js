import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import LandingSection from './components/LandingSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';

function App() {
  return (
    <>
      <Header />
      <LandingSection />
      <SpecialsSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </>
  );
}

export default App;

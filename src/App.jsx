import Hero from './components/Hero/Hero';
import Program from './components/Programs/Program';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Test from './components/Testimonials/Test';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import noise from './assets/noise.png';

function App() {
  return (
    <div
      className="isolate flex min-h-screen flex-col gap-24 overflow-hidden bg-app bg-blend-overlay"
      style={{ backgroundImage: `url(${noise})` }}
    >
      <Hero />
      <Program />
      <Reasons />
      <Plans/>
      <Test/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;

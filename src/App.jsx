import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderStory from './components/FounderStory';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Technology from './components/Technology';
import Products from './components/Products';
import Recipe from './components/Recipe';
import Awards from './components/Awards';
import SocialProof from './components/SocialProof';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import NotificationPopup from './components/NotificationPopup';
import FallingLeaves from './components/FallingLeaves'; // 1. Import vào đây

function App() {
  return (
    <div className="antialiased font-sans relative">
      {/* 2. Đặt ở đây để lá rơi xuyên suốt toàn bộ website */}

      <FallingLeaves />
      
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="founder"><FounderStory /></div>
      <div id="philosophy"><Philosophy /></div>
      <div id="process"><Process /></div>
      <Technology />
      <div id="products"><Products /></div>
      <div id="recipe"><Recipe /></div>
      <Awards />
      <SocialProof />
      <LeadForm />
      <Footer />
      
      
      <NotificationPopup />
    </div>
  );
}

export default App;
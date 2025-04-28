// import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import ServicePlans from './components/ServicePlans';
import AdvancePlan from './components/AdvancePlan';
import ResumeServices from './components/ResumeServices';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        {/* Background image and layout */}
        <div
          className="min-h-screen bg-cover bg-center relative bg-[url(../assets/bg.png)]">
          <Header /> {/* The Header stays on top of every page */}
          <Hero/>
        </div>
      </div>
      <main>
        <HowWeWork />
        <AboutUs />
        <Testimonials />
        <WhyChooseUs />
        <ServicePlans />
        <AdvancePlan />
        <ResumeServices />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
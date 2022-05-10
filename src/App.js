import React from 'react';
import { LOCATION } from './helper';
import IntroSection from './components/intro/Intro';
import ContactSection from './components/contact-section/ContactSection';
import DisclaimerSection from './components/disclaimer/Disclaimer';
import FooterSection from './components/footer/Footer';
import Map from './components/map/Map';

import './App.css';

function App() {
  return (
    <div className='App'>
      <IntroSection />
      <ContactSection />
      <Map location={LOCATION} zoomLevel={17} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;

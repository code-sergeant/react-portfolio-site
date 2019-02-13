import React from 'react';
import './App.css';
import Header from './layout/Header';
import About from './layout/About';
import Resume from './layout/Resume';
import Work from './layout/Work';
import Testimonials from './layout/Testimonials';
import Contact from './layout/Contact';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}
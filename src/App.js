import React from 'react';
import './App.css';
import Header from './layout/Header';
import About from './layout/About';
import Testimonials from './layout/Testimonials';
import Contact from './layout/Contact';
import Resume from './layout/Resume';
import Footer from './layout/Footer';

export default function App() {
  return (<div>
    <Header name="Steven Hernandez" />
    <About />
    <Testimonials />
    <Resume />
    <Contact />
    <Footer />
  </div>);
}


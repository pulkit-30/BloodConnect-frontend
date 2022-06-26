import React from 'react';
import CoverPage from '../components/home/Cover';
import About from '../components/home/About';
import LearnMore from '../components/home/LearnMore';
import Plasma from '../components/home/Plasma';
function Home() {
  return (
    <section>
      <CoverPage />
      <About />
      <LearnMore />
      <Plasma />
    </section>
  );
}

export default Home;

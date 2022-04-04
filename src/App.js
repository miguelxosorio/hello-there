import React from 'react';
import About from './components/About';
import More from './components/More';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    // Put Container here
    <main>
      <div>
        <About />
        <More />
        <Portfolio />
        <Contact />
        <Resume />
      </div>
    </main>
  );
}

export default App;

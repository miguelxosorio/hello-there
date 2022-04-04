import React from 'react';
import About from './components/About';
import More from './components/More';
import Portfolio from './components/Portfolio';
// import Projects from './components/Projects';

function App() {
  return (
    // Put Container here
    <main>
      <div>
        <About />
        <More />
        <Portfolio />
      </div>
    </main>
  );
}

export default App;

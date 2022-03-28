import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';

function Container() {
    const [ currentPage, setCurrentPage ] = useState('About');

    // page render function
    const render = () => {
        if(currentPage === 'About') {
            return <About />
        }
    }

  return (
    <div>
        {render()}
    </div>
  );
}

export default Container;

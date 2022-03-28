import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';

function Container() {
    const [ currentPage, setCurrentPage ] = useState('About');

    // page render function
    const render = () => {
        // render the About page
        if(currentPage === 'About') {
            return <About />
        }
        // Contact page
        if(currentPage === 'Contact') {
            return <Contact />
        }
    }

  return (
    <div>
        <Nav />
        {render()}
    </div>
  );
}

export default Container;

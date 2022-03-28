import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function Container() {
    // use state setting default state on the About page
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
        // Porfolio page
        if(currentPage === 'Portfolio') {
            return <Portfolio />
        }
    }

    // change page function passing in page
    const pageChange = (page) => setCurrentPage(page)

  return (
    <div>
        <Nav currentPage={currentPage} pageChange={pageChange}/>
        {render()}
    </div>
  );
}

export default Container;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <div className='navigation'>
        <Navbar />
      </div>
      <main>
        {/* This is where Home or Projects will magically appear */}
        <Outlet />
      </main>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
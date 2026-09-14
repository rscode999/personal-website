import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Layout from './components/Layout.jsx'


function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTop/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;

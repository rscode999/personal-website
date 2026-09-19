import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Layout from './components/Layout.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <ScrollToTop /> 

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


export default App;
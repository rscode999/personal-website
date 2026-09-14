import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Layout from './components/Layout.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
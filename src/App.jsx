import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Layout from './components/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

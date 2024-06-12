import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MyPage from './components/Mypage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/pic2" element={<Page1 />} />
        <Route path="/pic3" element={<Page2 />} />
        <Route path="/pic4" element={<Page3 />} />
        <Route path="/pic5" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;

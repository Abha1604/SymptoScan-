import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SymptomChecker from './SymptomChecker';
import { DarkModeProvider } from './context/DarkModeContext'; // ✅ import provider
import './index.css';
import NearbyHospitals from './NearbyHospitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider> {/* ✅ wrap everything */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/nearby-hospital" element={<NearbyHospitals />} />
      </Routes>
    </BrowserRouter>
  </DarkModeProvider>
);

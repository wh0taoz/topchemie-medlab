import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ONama from './pages/ONama';
import Medicina from './pages/proizvodi/Medicina';
import FarmakoIndustrija from './pages/proizvodi/FarmakoIndustrija';
import EkocertDeterdzenti from './pages/proizvodi/EkocertDeterdzenti';
import SajmoviKongresi from './pages/SajmoviKongresi';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ONama />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/proizvodi/medicina" element={<Medicina />} />
          <Route path="/proizvodi/farmako-industrija" element={<FarmakoIndustrija />} />
          <Route path="/proizvodi/ekocert-deterdzenti" element={<EkocertDeterdzenti />} />
          <Route path="/sajmovi-kongresi" element={<SajmoviKongresi />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FrequenciaInternet from './components/FrequenciaInternet';
import DispositivosAcesso from './components/DispositivosAcesso';
import Hipoteses from './components/Hipoteses';

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="bg-mesh" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frequencia" element={<FrequenciaInternet />} />
          <Route path="/dispositivos" element={<DispositivosAcesso />} />
          <Route path="/hipoteses" element={<Hipoteses />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
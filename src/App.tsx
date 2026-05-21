import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FrequenciaInternet from './components/FrequenciaInternet';
import DispositivosAcesso from './components/DispositivosAcesso';

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="bg-mesh" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frequencia" element={<FrequenciaInternet />} />
          <Route path="/dispositivos" element={<DispositivosAcesso />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
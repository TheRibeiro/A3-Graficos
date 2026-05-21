import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '80px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="fade-up" style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 style={{
          fontSize: 36, fontWeight: 900, letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.6))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Graficos da Pesquisa CETIC
        </h1>
        <p style={{ fontSize: 16, color: '#8b8b9e', marginTop: 12, maxWidth: 600, margin: '12px auto 0' }}>
          Visualização interativa dos dados sobre o uso de Internet por crianças e adolescentes no Brasil.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, width: '100%' }}>
        {/* Card 1: Frequência */}
        <div
          className="card fade-up"
          onClick={() => navigate('/frequencia')}
          style={{
            padding: 40, cursor: 'pointer', transition: 'all 0.3s ease',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            animationDelay: '0.1s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 25px 65px -12px rgba(0,0,0,0.6), 0 0 100px -20px rgba(99,102,241,0.15)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(99,102,241,0.08)' }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}></div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Frequência de Uso</h2>
          <p style={{ fontSize: 14, color: '#8b8b9e', lineHeight: 1.5 }}>

          </p>
        </div>

        {/* Card 2: Dispositivos */}
        <div
          className="card fade-up"
          onClick={() => navigate('/dispositivos')}
          style={{
            padding: 40, cursor: 'pointer', transition: 'all 0.3s ease',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            animationDelay: '0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 25px 65px -12px rgba(0,0,0,0.6), 0 0 100px -20px rgba(167,139,250,0.15)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(99,102,241,0.08)' }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}></div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Dispositivos de Acesso</h2>
          <p style={{ fontSize: 14, color: '#8b8b9e', lineHeight: 1.5 }}>

          </p>
        </div>
      </div>
    </div>
  );
}

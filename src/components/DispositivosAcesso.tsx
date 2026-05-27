import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = {
  celular: '#6366f1',
  computador: '#a78bfa'
};

const dataIdade = [
  { grupo: '9 a 10 anos', Celular: 82, Computador: 31 },
  { grupo: '11 a 12 anos', Celular: 85, Computador: 23 },
  { grupo: '13 a 14 anos', Celular: 80, Computador: 34 },
  { grupo: '15 a 17 anos', Celular: 87, Computador: 33 },
];

const dataRegiao = [
  { grupo: 'Sudeste', Celular: 80, Computador: 37 },
  { grupo: 'Nordeste', Celular: 91, Computador: 21 },
  { grupo: 'Sul', Celular: 76, Computador: 37 },
  { grupo: 'Norte', Celular: 89, Computador: 17 },
  { grupo: 'Centro-Oeste', Celular: 84, Computador: 40 },
];

export default function DispositivosAcesso() {
  const [view, setView] = useState<'idade' | 'regiao'>('idade');
  const items = view === 'idade' ? dataIdade : dataRegiao;
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 16px' }}>
      <button
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a0a0b8', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', marginBottom: 32, fontSize: 13, fontWeight: 500, transition: 'all 0.3s' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#a0a0b8' }}
      >
        <span>←</span> Voltar para o Início
      </button>

      <div className="fade-up" style={{ textAlign: 'center', marginBottom: 36 }}>
        <h1 style={{
          fontSize: 28, fontWeight: 800, letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.6))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Dispositivos de Acesso à Internet
        </h1>
        <p style={{ fontSize: 13, color: '#8b8b9e', marginTop: 6 }}>
          Comparativo entre Celular e Computador (Crianças e Adolescentes)
        </p>
      </div>

      <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: 32, animationDelay: '0.1s' }}>
        <div className="section-tabs" style={{ display: 'flex', gap: 4, padding: 4, background: 'rgba(255,255,255,0.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
          <button className={`section-tab ${view === 'idade' ? 'active' : ''}`} onClick={() => setView('idade')}
            style={{
              padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: 'none',
              background: view === 'idade' ? 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))' : 'transparent',
              color: view === 'idade' ? '#fff' : '#8b8b9e',
              borderStyle: 'solid', borderWidth: 1, borderColor: view === 'idade' ? 'rgba(99,102,241,0.3)' : 'transparent',
              transition: 'all 0.3s'
            }}>
            Por Faixa Etária
          </button>
          <button className={`section-tab ${view === 'regiao' ? 'active' : ''}`} onClick={() => setView('regiao')}
            style={{
              padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: 'none',
              background: view === 'regiao' ? 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))' : 'transparent',
              color: view === 'regiao' ? '#fff' : '#8b8b9e',
              borderStyle: 'solid', borderWidth: 1, borderColor: view === 'regiao' ? 'rgba(99,102,241,0.3)' : 'transparent',
              transition: 'all 0.3s'
            }}>
            Por Região
          </button>
        </div>
      </div>

      <div className="card fade-up" style={{ padding: 32, marginBottom: 24, animationDelay: '0.2s', background: 'rgba(16,16,28,0.85)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 20px 60px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: view === 'regiao' ? 4 : 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>
            Celular vs Computador {view === 'idade' ? 'por Idade' : 'por Região'}
          </h2>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#6366f1', background: 'rgba(99,102,241,0.12)', padding: '3px 10px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(99,102,241,0.2)' }}>Barras Empilhadas</span>
        </div>
        {view === 'regiao' && (
          <p style={{ fontSize: 12, color: '#8b8b9e', marginBottom: 20 }}>
            * Dados baseados na média de uso de crianças e adolescentes de 9 a 17 anos.
          </p>
        )}

        <div style={{ height: 400, width: '100%', marginLeft: '-20px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={items}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis
                dataKey="grupo"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#a0a0b8', fontSize: 13, fontWeight: 500 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#a0a0b8', fontSize: 13 }}
                domain={[0, 100]}
              />
              <RechartsTooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                formatter={(value: any, name: any) => [`${value}%`, name]}
                contentStyle={{ backgroundColor: 'rgba(16,16,28,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(10px)' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
              />
              <Legend
                wrapperStyle={{ paddingTop: 20 }}
                iconType="circle"
              />
              <Bar dataKey="Celular" fill={COLORS.celular} radius={[4, 4, 0, 0]} animationDuration={800} />
              <Bar dataKey="Computador" fill={COLORS.computador} radius={[4, 4, 0, 0]} animationDuration={800} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="fade-up" style={{ textAlign: 'center', marginTop: 28, animationDelay: '0.4s' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#8b8b9e' }}>
          Fonte: <a href="https://cetic.br/pt/pagina/saiba-mais-sobre-o-cetic/" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Cetic.br</a> — Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação
        </p>
      </div>
    </div>
  );
}

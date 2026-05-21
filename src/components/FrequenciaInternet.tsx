import React, { useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip,
  BarChart, Bar, XAxis, YAxis, LabelList
} from 'recharts';

const COLORS = ['#6366f1', '#a78bfa', '#3b82f6', '#f472b6', '#475569', '#22d3ee', '#f59e0b'];

const FREQ_LABELS = [
  'Mais de uma vez por dia', 'Pelo menos uma vez por dia',
  'Pelo menos uma vez por semana', 'Pelo menos uma vez por mês', 'Menos de uma vez por mês'
];

const dataIdade = [
  { grupo: '9 a 10 anos', valores: [75, 16, 4, 1, 2] },
  { grupo: '11 a 12 anos', valores: [82, 15, 2, 1, 1] },
  { grupo: '13 a 14 anos', valores: [83, 12, 4, 0, 1] },
  { grupo: '15 a 17 anos', valores: [91, 7, 1, 1, 0] },
];

const dataRegiao = [
  { grupo: 'Sudeste', emoji: '', valores: [86, 10, 2, 0, 1] },
  { grupo: 'Nordeste', emoji: '', valores: [83, 12, 3, 1, 1] },
  { grupo: 'Sul', emoji: '', valores: [86, 13, 1, 1, 0] },
  { grupo: 'Norte', emoji: '', valores: [76, 16, 5, 1, 1] },
  { grupo: 'Centro-Oeste', emoji: '', valores: [87, 11, 1, 0, 1] },
];


const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 10;


  const textX = width < 30 ? x + width + 10 : x + width - 10;
  const textAnchor = width < 30 ? "start" : "end";

  return (
    <text
      x={textX}
      y={y + height / 2}
      fill="#fff"
      textAnchor={textAnchor}
      dominantBaseline="middle"
      fontSize="13"
      fontWeight="bold"
      style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
    >
      {value}%
    </text>
  );
};


function Donut({ data, labels }: { data: number[]; labels: string[] }) {
  const chartData = data.map((v, i) => ({
    name: labels[i],
    value: v
  }));


  const maxItem = chartData.reduce((prev, current) => (prev.value > current.value) ? prev : current);

  return (
    <div style={{ width: 260, height: 260, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={115}
            paddingAngle={6}
            cornerRadius={10}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}
                style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}
              />
            ))}
          </Pie>
          <RechartsTooltip
            formatter={(value: number, name: string) => [`${value}%`, name]}
            contentStyle={{ backgroundColor: 'rgba(16,16,28,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(10px)' }}
            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
          />
        </PieChart>
      </ResponsiveContainer>


      <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <span style={{
          fontSize: 44, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1,
          background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.65))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          {maxItem.value}%
        </span>
        <span style={{ fontSize: 11, fontWeight: 500, color: '#8b8b9e', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.5px', maxWidth: 120, textAlign: 'center' }}>
          {maxItem.name}
        </span>
      </div>
    </div>
  );
}


function HBarChart({ items, labels }: { items: { grupo: string; emoji?: string; valores: number[] }[]; labels: string[] }) {
  const [activeFreq, setActiveFreq] = useState(0);

  const barData = items.map(item => ({
    name: `${item.emoji ? item.emoji + ' ' : ''}${item.grupo}`,
    value: item.valores[activeFreq]
  }));

  return (
    <div>
      <div className="legend-grid" style={{ marginBottom: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {labels.map((l, i) => (
          <button key={i} className={`legend-chip ${activeFreq === i ? 'active' : ''}`} onClick={() => setActiveFreq(i)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 10,
              background: activeFreq === i ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${activeFreq === i ? 'rgba(99,102,241,0.3)' : 'transparent'}`,
              cursor: 'pointer', transition: 'all 0.3s ease'
            }}>
            <span style={{ width: 10, height: 10, borderRadius: 4, background: COLORS[i] }} />
            <span style={{ color: activeFreq === i ? '#fff' : '#8b8b9e', fontSize: 13, fontWeight: 500 }}>{l}</span>
          </button>
        ))}
      </div>

      <div style={{ height: 320, width: '100%', marginLeft: '-20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={barData}
            margin={{ top: 10, right: 40, left: 20, bottom: 10 }}
            barSize={36}
          >
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a0a0b8', fontSize: 13, fontWeight: 500 }}
              width={160}
            />
            <RechartsTooltip
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              formatter={(value: number) => [`${value}%`, labels[activeFreq]]}
              contentStyle={{ backgroundColor: 'rgba(16,16,28,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(10px)' }}
              itemStyle={{ color: '#fff', fontWeight: 'bold' }}
            />
            <Bar
              dataKey="value"
              fill={COLORS[activeFreq]}
              radius={[0, 8, 8, 0]}
              animationDuration={800}
            >
              <LabelList dataKey="value" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';

export default function FrequenciaInternet() {
  const [view, setView] = useState<'idade' | 'regiao'>('idade');
  const items = view === 'idade' ? dataIdade : dataRegiao;
  const [donutGroup, setDonutGroup] = useState(0);
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
          background: 'linear-gradient(135deg,#fff,rgba(255,255,255,0.6))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Frequência de Uso da Internet
        </h1>
        <p style={{ fontSize: 13, color: '#8b8b9e', marginTop: 6 }}>
          Crianças e Adolescentes (9 a 17 anos) — Percentual de usuários
        </p>
      </div>

      <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: 32, animationDelay: '0.1s' }}>
        <div className="section-tabs" style={{ display: 'flex', gap: 4, padding: 4, background: 'rgba(255,255,255,0.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
          <button className={`section-tab ${view === 'idade' ? 'active' : ''}`} onClick={() => { setView('idade'); setDonutGroup(0); }}
            style={{
              padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: 'none',
              background: view === 'idade' ? 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))' : 'transparent',
              color: view === 'idade' ? '#fff' : '#8b8b9e',
              borderStyle: 'solid', borderWidth: 1, borderColor: view === 'idade' ? 'rgba(99,102,241,0.3)' : 'transparent',
              transition: 'all 0.3s'
            }}>
            Por Faixa Etária
          </button>
          <button className={`section-tab ${view === 'regiao' ? 'active' : ''}`} onClick={() => { setView('regiao'); setDonutGroup(0); }}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>
            {view === 'idade' ? 'Comparativo por Faixa Etária' : 'Comparativo por Região'}
          </h2>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#6366f1', background: 'rgba(99,102,241,0.12)', padding: '3px 10px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(99,102,241,0.2)' }}>Gráfico de Barras</span>
        </div>
        <p style={{ fontSize: 12, color: '#8b8b9e', marginBottom: 20 }}>Clique em uma frequência para filtrar os dados abaixo</p>
        <HBarChart items={items} labels={FREQ_LABELS} />
      </div>

      <div className="card fade-up" style={{ padding: 32, animationDelay: '0.3s', background: 'rgba(16,16,28,0.85)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 20px 60px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Distribuição Detalhada</h2>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#a78bfa', background: 'rgba(167,139,250,0.12)', padding: '3px 10px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(167,139,250,0.2)' }}>Gráfico de Rosca</span>
        </div>
        <p style={{ fontSize: 12, color: '#8b8b9e', marginBottom: 24 }}>Selecione um grupo demográfico para ver a divisão exata</p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {items.map((it, i) => (
              <button key={i} onClick={() => setDonutGroup(i)}
                style={{
                  padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer', borderRadius: 8,
                  background: donutGroup === i ? 'rgba(167,139,250,0.15)' : 'rgba(255,255,255,0.03)',
                  color: donutGroup === i ? '#fff' : '#8b8b9e',
                  border: `1px solid ${donutGroup === i ? 'rgba(167,139,250,0.4)' : 'transparent'}`,
                  transition: 'all 0.3s'
                }}>
                {(it as any).emoji || ''} {it.grupo}
              </button>
            ))}
          </div>


          <Donut data={items[donutGroup].valores} labels={FREQ_LABELS} />
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
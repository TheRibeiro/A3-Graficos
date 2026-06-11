import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';

const dataHipoteses = [
  {
    tema: 'Saúde Mental',
    Confirmado: 56,
    Restante: 44,
    hipoteseCompleta: 'Adolescentes que passam mais tempo na internet apresentam maior frequência de indicadores negativos de saúde mental, como tristeza, ansiedade ou sensação de solidão.',
    detalhe: '56% dos jovens de 11 a 17 anos relatam maior sobrecarga emocional e ansiedade.'
  },
  {
    tema: 'Cyberbullying',
    Confirmado: 47.6,
    Restante: 52.4,
    hipoteseCompleta: 'Quanto maior o tempo de uso da internet, maior a exposição a situações de cyberbullying.',
    detalhe: '47,6% apresentam maior exposição a situações de violência e ofensas online.'
  },
  {
    tema: 'Autoestima',
    Confirmado: 56.6,
    Restante: 43.4,
    hipoteseCompleta: 'Adolescentes que utilizam redes sociais com maior frequência tendem a apresentar maior insatisfação com a própria vida ou imagem.',
    detalhe: '56,6% citam o uso intenso como fator de comparação social e pressão estética.'
  },
  {
    tema: 'Pertencimento',
    Confirmado: 83.25,
    Restante: 16.75,
    hipoteseCompleta: 'Aumento ou redução da sensação de pertencimento social dependendo do tipo de uso.',
    detalhe: '83,25% das crianças de 9 a 17 anos sentem efeitos (positivos/negativos) no pertencimento.'
  },
  {
    tema: 'Foco/Atenção',
    Confirmado: 84,
    Restante: 16,
    hipoteseCompleta: 'Uso exagerado gera dificuldades de comunicação fora das redes e baixa concentração.',
    detalhe: '84% dos jovens com tempo excessivo sofrem redução de foco e menor interação presencial.'
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        backgroundColor: 'rgba(16,16,28,0.95)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '16px',
        color: '#fff',
        backdropFilter: 'blur(10px)',
        maxWidth: '320px'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#a78bfa' }}>{label}</h3>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#d1d5db', lineHeight: 1.5, fontStyle: 'italic' }}>
          "{data.hipoteseCompleta}"
        </p>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ display: 'inline-block', width: 10, height: 10, backgroundColor: '#f43f5e', borderRadius: '50%', marginRight: 6 }}></span>
          <span style={{ fontWeight: 'bold' }}>Evidência: {data.Confirmado}%</span>
        </div>
        <hr style={{ borderColor: 'rgba(255,255,255,0.05)', margin: '12px 0' }} />
        <p style={{ margin: 0, fontSize: '11px', color: '#9ca3af', lineHeight: 1.4 }}>
          {data.detalhe}
        </p>
      </div>
    );
  }
  return null;
};

export default function Hipoteses() {
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
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.6))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Análise de Hipóteses
        </h1>
        <p style={{ fontSize: 13, color: '#8b8b9e', marginTop: 6 }}>
          Comparativo entre as hipóteses levantadas e os dados da pesquisa (TIC Kids Online 2025)
        </p>
      </div>

      <div className="card fade-up" style={{ padding: 32, marginBottom: 24, animationDelay: '0.2s', background: 'rgba(16,16,28,0.85)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 20px 60px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>
            Nível de Confirmação por Hipótese
          </h2>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#f43f5e', background: 'rgba(244,63,94,0.12)', padding: '3px 10px', borderRadius: 6, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(244,63,94,0.2)' }}>Gráfico de Barras</span>
        </div>
        <p style={{ fontSize: 12, color: '#8b8b9e', marginBottom: 30 }}>
          Passe o mouse sobre as barras para ler a hipótese completa e o detalhe dos dados coletados.
        </p>

        <div style={{ height: 450, width: '100%', marginLeft: '-20px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataHipoteses}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
              barSize={40}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={true} vertical={false} />
              <XAxis 
                type="number"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#a0a0b8', fontSize: 13 }}
                domain={[0, 100]}
                unit="%"
              />
              <YAxis 
                type="category"
                dataKey="tema" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#a0a0b8', fontSize: 13, fontWeight: 500 }}
                width={120}
              />
              <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
              <Legend 
                wrapperStyle={{ paddingTop: 20 }}
                iconType="circle"
                formatter={(value) => <span style={{ color: '#fff' }}>{value}</span>}
              />
              <Bar dataKey="Confirmado" name="Evidência" fill="#f43f5e" animationDuration={1000} radius={[0, 8, 8, 0]}>
                <LabelList dataKey="Confirmado" position="right" formatter={(val: any) => `${val}%`} fill="#a0a0b8" fontSize={12} fontWeight="bold" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="fade-up" style={{ textAlign: 'center', marginTop: 28, animationDelay: '0.4s' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#8b8b9e' }}>
          Fonte: Dados extraídos com base no relatório TIC Kids Online (2025)
        </p>
      </div>
    </div>
  );
}

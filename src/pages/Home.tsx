import { useNavigate } from 'react-router-dom';

interface DocumentLink {
  title: string;
  url: string;
  type: 'pdf' | 'slides' | 'spreadsheet' | 'doc';
  description: string;
  color: string;
  accentBg: string;
  accentBorder: string;
}

const DOCUMENTS: DocumentLink[] = [
  {
    title: 'Relatório do Trabalho A3',
    url: 'https://docs.google.com/document/d/1X1jZ9GeA6vinF8-OuRYOikQtPytw1EFcQEKo6vvnwCk/edit?usp=drive_link',
    type: 'doc',
    description: 'Relatório acadêmico final contendo a metodologia, análise dos Dados e conclusões da A3.',
    color: '#2871f8ff', // rose
    accentBg: 'rgba(83, 148, 245, 0.08)',
    accentBorder: 'rgba(63, 126, 244, 0.2)'
  },
  {
    title: 'Slides de Apresentação',
    url: 'https://drive.google.com/file/d/1GBPMAFT6AJOrVz38v4fmg5wXCZ01TBOg/view?usp=drive_link',
    type: 'slides',
    description: 'Material visual/ apresentação do projeto.',
    color: '#eab308', // amber
    accentBg: 'rgba(234, 179, 8, 0.08)',
    accentBorder: 'rgba(234, 179, 8, 0.2)'
  },
  {
    title: 'Base de Dados CETIC',
    url: 'https://docs.google.com/spreadsheets/d/1RoAzvwMskWAcdlHM_HiMsJbwAJYb6WLe/edit?usp=drive_link&ouid=111794860558798976781&rtpof=true&sd=true',
    type: 'spreadsheet',
    description: 'Planilha contendo os dados que serviram de base para a criação dos gráficos.',
    color: '#10b981', // emerald
    accentBg: 'rgba(16, 185, 129, 0.08)',
    accentBorder: 'rgba(16, 185, 129, 0.2)'
  }
];

const TEAM_MEMBERS = ['Alex', 'Fernanda', 'Guilherme', 'Isabela', 'Leonardo', 'Maria Eduarda', 'Maria Fernanda', 'Maria Luiza'];

export default function Home() {
  const navigate = useNavigate();

  const getDocIcon = (type: string, color: string) => {
    switch (type) {
      case 'pdf':
        return (
          <svg style={{ width: 22, height: 22, color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6M9 13h6M9 9h2" />
          </svg>
        );
      case 'slides':
        return (
          <svg style={{ width: 22, height: 22, color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
          </svg>
        );
      case 'spreadsheet':
        return (
          <svg style={{ width: 22, height: 22, color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg style={{ width: 22, height: 22, color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        );
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Header / Hero Section */}
      <div className="fade-up" style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.15)',
          padding: '6px 16px',
          borderRadius: 20,
          fontSize: 12,
          fontWeight: 600,
          color: '#818cf8',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: 20
        }}>
          🎓 ANÁLISE DE DADOS & BIG DATA
        </div>
        <h1 style={{
          fontSize: 38,
          fontWeight: 900,
          letterSpacing: '-1.5px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.15
        }}>
          Uso de Internet por Adolescentes no Brasil
        </h1>
        <p style={{ fontSize: 15, color: '#8b8b9e', marginTop: 12, maxWidth: 620, margin: '12px auto 0', lineHeight: 1.6 }}>
          Visualização interativa de dados demográficos e repositório de documentos do Trabalho Acadêmico A3.
        </p>

        {/* Hardcoded Group Members */}
        <div style={{
          marginTop: 20,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8
        }}>
          <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginRight: 4 }}>Integrantes:</span>
          {TEAM_MEMBERS.map((name, i) => (
            <span key={i} style={{
              fontSize: 12,
              fontWeight: 500,
              color: '#a5b4fc',
              background: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              padding: '3px 10px',
              borderRadius: 6
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Main Graphics Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, width: '100%', marginBottom: 56 }}>

        {/* Card 1: Frequência */}
        <div 
          className="card fade-up" 
          onClick={() => navigate('/frequencia')}
          style={{
            padding: '36px 32px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            animationDelay: '0.1s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 65px -12px rgba(0,0,0,0.6), 0 0 100px -20px rgba(99,102,241,0.15)';
            e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(99,102,241,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.15)',
                padding: 10,
                borderRadius: 12,
                color: '#6366f1',
                display: 'inline-flex'
              }}>
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#818cf8', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99,102,241,0.15)', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' }}>Frequência</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-0.5px' }}>Frequência de Uso</h2>
            <p style={{ fontSize: 13, color: '#8b8b9e', lineHeight: 1.6, marginBottom: 16 }}>
              Exibe com que regularidade crianças e adolescentes acessam a internet, com filtros por faixa etária ou região demográfica.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#818cf8', marginTop: 12 }}>
            Visualizar gráficos
            <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Card 2: Dispositivos */}
        <div 
          className="card fade-up" 
          onClick={() => navigate('/dispositivos')}
          style={{
            padding: '36px 32px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            animationDelay: '0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 65px -12px rgba(0,0,0,0.6), 0 0 100px -20px rgba(167,139,250,0.15)';
            e.currentTarget.style.borderColor = 'rgba(167,139,250,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(99,102,241,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{
                background: 'rgba(167,139,250,0.08)',
                border: '1px solid rgba(167,139,250,0.15)',
                padding: 10,
                borderRadius: 12,
                color: '#a78bfa',
                display: 'inline-flex'
              }}>
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#c084fc', background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.15)', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' }}>Acesso</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-0.5px' }}>Dispositivos de Acesso</h2>
            <p style={{ fontSize: 13, color: '#8b8b9e', lineHeight: 1.6, marginBottom: 16 }}>
              Análise comparativa entre o uso de celulares e computadores como meio de acesso ao ambiente virtual pelos adolescentes.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#c084fc', marginTop: 12 }}>
            Visualizar gráficos
            <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Card 3: Hipóteses */}
        <div 
          className="card fade-up" 
          onClick={() => navigate('/hipoteses')}
          style={{
            padding: '36px 32px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            animationDelay: '0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 25px 65px -12px rgba(0,0,0,0.6), 0 0 100px -20px rgba(244,63,94,0.15)';
            e.currentTarget.style.borderColor = 'rgba(244,63,94,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(99,102,241,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{
                background: 'rgba(244,63,94,0.08)',
                border: '1px solid rgba(244,63,94,0.15)',
                padding: 10,
                borderRadius: 12,
                color: '#f43f5e',
                display: 'inline-flex'
              }}>
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#fb7185', background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.15)', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' }}>Análise</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-0.5px' }}>Análise de Hipóteses</h2>
            <p style={{ fontSize: 13, color: '#8b8b9e', lineHeight: 1.6, marginBottom: 16 }}>
              Validação das hipóteses sobre o impacto do uso da internet (Saúde Mental, Foco, Cyberbullying).
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#fb7185', marginTop: 12 }}>
            Visualizar gráficos
            <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Structured Read-Only Documents Section */}
      <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40 }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-0.5px' }}>
          Documentos Acadêmicos
        </h3>
        <p style={{ fontSize: 13, color: '#8b8b9e', marginBottom: 24 }}>
          Acesse abaixo os documentos do projeto A3.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, width: '100%' }}>
          {DOCUMENTS.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => window.open(doc.url, '_blank', 'noopener,noreferrer')}
              className="card"
              style={{
                padding: '24px 22px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 180,
                background: doc.accentBg,
                borderColor: doc.accentBorder
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = doc.color;
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${doc.accentBorder}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = doc.accentBorder;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: 8,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}>
                    {getDocIcon(doc.type, doc.color)}
                  </div>
                  <span style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: doc.color,
                    background: 'rgba(0,0,0,0.3)',
                    border: `1px solid ${doc.accentBorder}`,
                    padding: '2px 8px',
                    borderRadius: 4,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {doc.type}
                  </span>
                </div>

                <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>
                  {doc.title}
                </h4>
                <p style={{ fontSize: 12, color: '#8b8b9e', lineHeight: 1.5 }}>
                  {doc.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: doc.color, marginTop: 16 }}>
                Visualizar documento
                <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: 64, width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: '#4a5568', lineHeight: 1.6 }}>
          Atividade A3.
        </p>
      </footer>

    </div>
  );
}

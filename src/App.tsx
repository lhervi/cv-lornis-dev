import { useState, useEffect } from 'react';
import cvDataRaw from './assets/cv.json';
import type { CVData, CVIdioma } from './types/cv';
import Header from './components/Header';
import Experience from './components/Experience';
import SkillGroup from './components/SkillGroup';
import Education from './components/Education';

const data = cvDataRaw as CVData;

function App() {
  // Estados para personalización
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<keyof CVData>('es');

  // Aplicar el tema al HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Diccionario de datos actual según el idioma seleccionado
  const cv: CVIdioma = data[lang];

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Barra de navegación con controles */}
      <nav style={{
        textAlign: 'right',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '15px'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setLang('es')}
            style={{
              cursor: 'pointer', background: 'none', border: 'none',
              color: 'var(--text-color)',
              fontWeight: lang === 'es' ? 'bold' : 'normal',
              textDecoration: lang === 'es' ? 'underline' : 'none'
            }}
          >
            ES
          </button>
          <button
            onClick={() => setLang('en')}
            style={{
              cursor: 'pointer', background: 'none', border: 'none',
              color: 'var(--text-color)',
              fontWeight: lang === 'en' ? 'bold' : 'normal',
              textDecoration: lang === 'en' ? 'underline' : 'none'
            }}
          >
            EN
          </button>
        </div>

        <button
          onClick={toggleTheme}
          style={{ cursor: 'pointer', fontSize: '1.5rem', background: 'none', border: 'none' }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* Componente Header */}
      <Header perfil={cv.perfil} />

      {/* Sección Sobre Mí */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'var(--accent-color)', borderBottom: '1px solid var(--card-bg)' }}>
          {lang === 'es' ? 'Sobre mí' : 'About me'}
        </h3>
        <p style={{ lineHeight: '1.6', opacity: 0.9 }}>{cv.perfil.bio}</p>
      </section>

      {/* Componente de Experiencia Laboral */}
      <Experience
        experiencias={cv.experiencia}
        tituloSeccion={lang === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
      />

      {/* Sección de Habilidades */}
      <section style={{ marginTop: '30px' }}>
        <h3 style={{ color: 'var(--accent-color)', borderBottom: '1px solid var(--card-bg)' }}>
          {lang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
        </h3>

        <SkillGroup
          titulo={lang === 'es' ? 'Lenguajes' : 'Languages'}
          lista={cv.habilidades.lenguajes}
        />
        <SkillGroup
          titulo="Frameworks"
          lista={cv.habilidades.frameworks}
        />
        <SkillGroup
          titulo={lang === 'es' ? 'Herramientas' : 'Tools'}
          lista={cv.habilidades.herramientas}
        />
      </section>

      {/* Sección de Educación */}
      <Education
        tituloSeccion={lang === 'es' ? 'Educación' : 'Education'}
        items={cv.educacion}
      />

      {/* Sección de Certificaciones */}
      <Education
        tituloSeccion={lang === 'es' ? 'Certificaciones' : 'Certifications'}
        items={cv.certificaciones}
      />

    </div>
  );
}

export default App;
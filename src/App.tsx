import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import cvData from './assets/cv.json';

function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const cv = (cvData as any)[lang];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="cv-container">
      <nav className="flex justify-between items-center mb-16">
        <div className="flex gap-4 text-xs font-bold tracking-widest">
          <button
            onClick={() => setLang('es')}
            className={`cursor-pointer transition-colors ${lang === 'es' ? 'text-blue-600' : 'opacity-40'}`}
          >
            ESPAÑOL
          </button>
          <span className="opacity-20">/</span>
          <button
            onClick={() => setLang('en')}
            className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-blue-600' : 'opacity-40'}`}
          >
            ENGLISH
          </button>
        </div>
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 cursor-pointer"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>

      <main className="space-y-20">
        <Header perfil={cv.perfil} />

        <section className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            {lang === 'es' ? 'Sobre mí' : 'About me'}
          </h3>
          <p className="text-xl leading-relaxed font-light italic text-slate-700 dark:text-slate-300">
            "{cv.perfil.bio}"
          </p>
        </section>

        <Experience
          experiencias={cv.experiencia}
          tituloSeccion={lang === 'es' ? 'Trayectoria Profesional' : 'Experience'}
        />

        <section className="space-y-8">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            {lang === 'es' ? 'Educación' : 'Education'}
          </h3>
          <div className="space-y-8">
            {cv.educacion.map((edu: any, i: number) => (
              <div key={i} className="border-l-2 border-slate-100 dark:border-slate-800 pl-6 space-y-2">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.titulo}</h4>
                <div className="text-blue-600 dark:text-blue-400 font-medium">{edu.institucion}</div>
                <div className="text-sm font-mono opacity-50">{edu.fecha}</div>
                {edu.descripcion && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">{edu.descripcion}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            {lang === 'es' ? 'Habilidades' : 'Skills'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(cv.habilidades).map(([categoria, items]: any) => (
              <div key={categoria} className="space-y-3">
                <h4 className="font-bold capitalize text-slate-400 text-xs tracking-widest">{categoria}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item: string) => (
                    <span key={item} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            {lang === 'es' ? 'Certificaciones' : 'Certifications'}
          </h3>
          <div className="grid gap-4">
            {cv.certificaciones.map((cert: any, index: number) => (
              <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{cert.nombre}</p>
                  <p className="text-xs text-slate-500">{cert.emisor} — {cert.fecha}</p>
                </div>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs font-bold hover:underline">
                    LINK
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-24 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs opacity-30 uppercase tracking-[0.2em]">
        {new Date().getFullYear()} — {cv.perfil.nombre}
      </footer>
    </div>
  );
}

export default App;
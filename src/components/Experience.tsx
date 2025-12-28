import type { Experiencia } from '../types/cv';

interface ExperienceProps {
    experiencias: Experiencia[];
    tituloSeccion: string;
}

const Experience = ({ experiencias, tituloSeccion }: ExperienceProps) => {
    return (
        <section className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 dark:text-blue-400">
                {tituloSeccion}
            </h3>

            <div className="space-y-16">
                {experiencias.map((exp, index) => (
                    <div key={index} className="space-y-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 ">
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white leading-none mt-6">
                                {exp.puesto}
                            </h4>
                            <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                                {exp.periodo}
                            </span>
                        </div>

                        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 opacity-90">
                            {exp.empresa}
                        </div>

                        <ul className="space-y-3">
                            {exp.logros.map((logro, i) => (
                                <li key={i} className="text-slate-700 dark:text-slate-300 flex gap-3 text-[1.05rem] leading-relaxed">
                                    <span className="text-blue-500 shrink-0">•</span>
                                    {logro}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {exp.tecnologias.map((tech) => (
                                <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
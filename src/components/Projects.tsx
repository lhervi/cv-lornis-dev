interface Proyecto {
    nombre: string;
    rol: string;
    descripcion: string;
    retoTecnico: string;
    tecnologias: string[];
    url: string;
    github: string;
}

interface ProjectsProps {
    proyectos: Proyecto[];
    tituloSeccion: string;
}

const Projects = ({ proyectos, tituloSeccion }: ProjectsProps) => {
    return (
        <section className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                {tituloSeccion}
            </h3>

            <div className="grid grid-cols-1 gap-12">
                {proyectos.map((proy, index) => (
                    <div key={index} className="group relative gap-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="space-y-1">
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                    {proy.nombre}
                                </h4>
                                <div className="text-sm font-medium text-blue-500 uppercase tracking-wider">
                                    {proy.rol}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a href={proy.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-1 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    GITHUB
                                </a>
                                <a href={proy.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                    DEMO
                                </a>
                            </div>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {proy.descripcion}
                        </p>

                        <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                            <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 block mb-1">
                                Reto Técnico:
                            </span>
                            <p className="text-sm italic text-slate-600 dark:text-slate-400">
                                {proy.retoTecnico}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 ">
                            {proy.tecnologias.map((tech) => (
                                <span key={tech} className="mt-2 text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">
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

export default Projects;
import type { Perfil } from '../types/cv';

interface HeaderProps {
    perfil: Perfil;
}

const Header = ({ perfil }: HeaderProps) => {
    return (
        <header className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-5xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white">
                    {perfil.nombre}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 tracking-tight">
                    {perfil.titulo}
                </h2>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium">
                    📍 {perfil.ubicacion}
                </span>
                <a
                    href={`mailto:${perfil.contacto.email}`}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                    ✉️ {perfil.contacto.email}
                </a>
                <a
                    href={perfil.contacto.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    🔗 LinkedIn
                </a>
            </div>
        </header>
    );
};

export default Header;
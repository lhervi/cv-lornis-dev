import type { Perfil } from '../types/cv';

interface HeaderProps {
    perfil: Perfil;
}

const Header = ({ perfil }: HeaderProps) => {
    return (
        <header style={{
            borderBottom: '2px solid var(--accent-color)',
            marginBottom: '20px',
            paddingBottom: '10px'
        }}>
            <h1 style={{ margin: 0, color: 'var(--text-color)', fontSize: '3rem', fontWeight: '600' }}>{perfil.nombre}</h1>
            <h2 style={{ margin: '5px 0', color: 'var(--accent-color)', fontWeight: '500' }}>{perfil.titulo}</h2>
            <p style={{ color: 'var(--text-color)', opacity: 0.8, fontSize: '0.9rem' }}>📍 {perfil.ubicacion}</p>
        </header>
    );
};

export default Header;
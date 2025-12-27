import type { Educacion, Certificacion } from '../types/cv';

interface EducationProps {
    tituloSeccion: string;
    items: (Educacion | Certificacion)[];
}

const Education = ({ tituloSeccion, items }: EducationProps) => {
    return (
        <section style={{ marginTop: '30px' }}>
            <h3 style={{
                color: 'var(--accent-color)',
                borderBottom: '1px solid var(--card-bg)',
                paddingBottom: '5px'
            }}>
                {tituloSeccion}
            </h3>

            <div style={{ display: 'grid', gap: '20px', marginTop: '15px' }}>
                {items.map((item, index) => {
                    // Lógica para manejar si es Educación (institucion) o Certificación (emisor)
                    const lugar = 'institucion' in item ? item.institucion : item.emisor;
                    const tituloPrincipal = 'titulo' in item ? item.titulo : item.nombre;

                    return (
                        <div key={index} style={{ borderLeft: '2px solid var(--card-bg)', paddingLeft: '15px' }}>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{tituloPrincipal}</h4>
                            <p style={{ margin: '5px 0', fontSize: '0.95rem' }}>
                                <strong>{lugar}</strong> | <span style={{ color: 'var(--accent-color)' }}>{item.fecha}</span>
                            </p>

                            {/* Solo mostramos la descripción si existe (Educación) */}
                            {'descripcion' in item && item.descripcion && (
                                <p style={{ fontSize: '0.85rem', opacity: 0.8, fontStyle: 'italic', marginTop: '5px' }}>
                                    {item.descripcion}
                                </p>
                            )}

                            {/* Enlace opcional */}
                            {item.url && (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-color)',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    marginTop: '5px'
                                }}>
                                    🔗 {'institucion' in item ? 'Ver Institución' : 'Ver Credencial'}
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
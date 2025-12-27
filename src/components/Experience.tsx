import type { Experiencia } from '../types/cv';

interface ExperienceProps {
    experiencias: Experiencia[];
    tituloSeccion: string;
}

const Experience = ({ experiencias, tituloSeccion }: ExperienceProps) => {
    return (
        <section style={{ marginTop: '30px' }}>
            <h3 style={{
                color: 'var(--accent-color)',
                borderBottom: '1px solid var(--card-bg)',
                paddingBottom: '5px'
            }}>
                {tituloSeccion}
            </h3>

            {experiencias.map((exp, index) => (
                <div key={index} style={{
                    backgroundColor: 'var(--card-bg)',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px'
                }}>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{exp.puesto}</h4>
                    <div style={{
                        fontSize: '0.9rem',
                        color: 'var(--accent-color)',
                        marginBottom: '10px',
                        fontWeight: 'bold'
                    }}>
                        {exp.empresa} | <span>{exp.periodo}</span>
                    </div>

                    <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        {exp.logros.map((logro, i) => (
                            <li key={i} style={{ marginBottom: '8px' }}>{logro}</li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {exp.tecnologias.map((tech, i) => (
                            <span key={i} style={{
                                fontSize: '0.7rem',
                                border: '1px solid var(--accent-color)',
                                color: 'var(--accent-color)',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                textTransform: 'uppercase'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
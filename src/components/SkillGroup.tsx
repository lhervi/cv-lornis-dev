interface SkillGroupProps {
    titulo: string;
    lista: string[];
}

const SkillGroup = ({ titulo, lista }: SkillGroupProps) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h4 style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                color: 'var(--accent-color)',
                marginBottom: '10px',
                letterSpacing: '1px'
            }}>
                {titulo}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {lista.map((skill, index) => (
                    <span key={index} style={{
                        padding: '4px 12px',
                        backgroundColor: 'var(--card-bg)',
                        border: '1px solid var(--accent-color)',
                        borderRadius: '15px',
                        fontSize: '0.85rem'
                    }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillGroup;
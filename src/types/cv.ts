export interface Perfil {
    nombre: string;
    titulo: string;
    ubicacion: string;
    bio: string;
    contacto: {
        email: string;
        linkedin: string;
        github: string;
    };
}

export interface Educacion {
    institucion: string;
    url: string;
    titulo: string;
    fecha: string;
    descripcion: string;
}

export interface Experiencia {
    empresa: string;
    puesto: string;
    periodo: string;
    tecnologias: string[];
    logros: string[];
}

export interface Certificacion {
    nombre: string;
    emisor: string;
    fecha: string;
    url: string;
}

export interface Habilidades {
    lenguajes: string[];
    frameworks: string[];
    herramientas: string[];
}

export interface CVIdioma {
    perfil: Perfil;
    educacion: Educacion[];
    experiencia: Experiencia[];
    certificaciones: Certificacion[];
    habilidades: Habilidades;
}

export interface CVData {
    es: CVIdioma;
    en: CVIdioma;
}
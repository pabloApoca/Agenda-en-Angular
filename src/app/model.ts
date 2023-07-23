export interface Contacto {
    id: number;
    nombre: string;
    fechaNacimiento?: Date;
    celular?: string;
    email?: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    nombre: string;
    apellido?: string;
    dni?: number | null;
    email?: string;
    password?: string;
}

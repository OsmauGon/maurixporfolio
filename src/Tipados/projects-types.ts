// types.ts
export interface Project {
  titulo: string;
  descripcion: string;
  tecnologias: string[]; // Array de nombres de tecnologías o rutas de iconos
  repo: string;
  demo?: string;
  video?: string;
  imagen: string;
  documento: string;
}

export interface ProjectCardProps {
  project: Project;
}
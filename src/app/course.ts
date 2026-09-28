export interface Course {
  id: number;
  title: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  workload: string;
  vacancies: number;
  image: string;
  description: string;
  instructor: string;
  certificate: boolean;
  enrolled: boolean;
  favorite: boolean;
  price: number;
  progress: number;
  handout: string;
}

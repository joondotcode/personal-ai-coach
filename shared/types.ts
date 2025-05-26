// Shared types between frontend and backend

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
} 
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  github: string;
  live: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'Personal Portfolio',
      description: 'Developer portfolio built with Angular 18 and Tailwind CSS.',
      tech: ['Angular', 'Tailwind', 'TypeScript'],
      imageUrl: 'https://source.unsplash.com/random/400x200?portfolio',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.dev',
    },
    {
      title: 'Task Manager App',
      description: 'A simple task manager with drag-and-drop and local storage.',
      tech: ['Angular', 'RxJS', 'Bootstrap'],
      imageUrl: 'https://source.unsplash.com/random/400x200?productivity',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://tasks.yourportfolio.dev',
    }
  ]);
  trackByTitle(index: number, project: Project): string {
    return project.title;
  }
  
  
}

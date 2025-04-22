import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'RxJS', level: 75 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'Firebase', level: 60 },
      ]
    }
  ];
}

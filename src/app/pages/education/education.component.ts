import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Virtual University of Pakistan',
      period: '2020 – 2024',
      icon: '🎓'
    },
    {
      degree: 'Intermediate in Pre-Engineering',
      institution: 'Adamjee Government Science College',
      period: '2017 – 2019',
      icon: '📘'
    },
    {
      degree: 'Matriculation in Computer Science',
      institution: 'The Paradise School',
      period: '2015 – 2017',
      icon: '📗'
    }
  ];
}

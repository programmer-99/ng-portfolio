import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  timeline = [
    {
      company: 'Centegy Technologies',
      role: 'Analyst Programmer',
      period: 'Feb 2024 – Present',
      details: [
        'Designed and implemented robust functionalities using Angular, TypeScript, and RxJS.',
        'Optimized application performance using Angular’s lifecycle hooks and advanced rendering strategies.',
        'Crafted responsive and user-friendly interfaces using Angular, CSS, and SCSS, enhancing user engagement.',
        'Skilled in diagnosing and resolving complex technical issues, improving system stability and user experience.'
      ],
    },
    {
      company: 'VinnCorp',
      role: 'Associate Software Engineer',
      period: 'Jan 2023 – Jan 2024',
      details: [
        'Design user-interface, API integration using Angular.',
        'Writing tested, idiomatic, and documented JavaScript, HTML and CSS.',
        'Adapted existing software to new purposes, improving performance and including new functionality.',
        'Communicating with external web services.',
        'Creating self-contained, reusable, and testable modules and components.'
      ],
    },
    {
      company: 'Sudofy',
      role: 'Web Developer',
      period: 'Jul 2022 – Nov 2022',
      details: [
        'Collaborated with a team of developers to design, develop, and maintain responsive and user-friendly websites.',
        'Assisted in implementing front-end web development technologies, including HTML, CSS, and JavaScript, to create visually appealing and interactive user interfaces.'
      ],
    }
  ];
}

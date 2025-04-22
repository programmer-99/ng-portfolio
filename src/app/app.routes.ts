import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', component: HomeComponent, data: { animation: 'Home' } },
          { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } },
          { path: 'about', component: AboutComponent, data: { animation: 'About' } },
          { path: 'experience', component: ExperienceComponent, data: { animation: 'Experience' } },
          { path: 'skills', component: SkillsComponent, data: { animation: 'Skills' } },
          { path: 'education', component: EducationComponent, data: { animation: 'Education' } },
          { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
          { path: '**', component: NotFoundComponent, data: { animation: 'NotFound' } },
        ]
      }
      
];

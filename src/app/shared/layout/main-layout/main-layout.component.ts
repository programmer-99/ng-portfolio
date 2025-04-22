import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from '../../components/scroll-top/scroll-top.component';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ScrollTopComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'scale(0.9) rotate(-2deg)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1) rotate(0)' })),
      ]),
    ]),
  ]
  
})
export class MainLayoutComponent {
  prepareRoute(outlet: any) {
    return outlet.activatedRouteData?.['animation'];
  }
  
}

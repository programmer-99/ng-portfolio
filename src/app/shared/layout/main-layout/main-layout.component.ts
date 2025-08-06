import { Component, ViewChild } from '@angular/core';
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
import { ToastComponent } from '../../components/toast/toast.component';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ScrollTopComponent, ToastComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  
  
})
export class MainLayoutComponent {
  @ViewChild(ToastComponent) toast!: ToastComponent;
  private analytics = getAnalytics(initializeApp(firebaseConfig)); 

  prepareRoute(outlet: any) {
    return outlet.activatedRouteData?.['animation'];
  }
  handleResumeClick(event: MouseEvent) {
    this.trackEvent('Resume');
    setTimeout(() => {
      this.toast?.show('✅ Resume download started!', 'success');
    }, 500); 
  }
  
  handleCallClick(event: MouseEvent) {
    this.toast?.show('📞 Call started on mobile', 'success');
  }
  trackEvent(buttonName: string) {
    logEvent(this.analytics, buttonName, {
      name: buttonName
    });
    console.log(`${buttonName} clicked!`);
  }
  
}

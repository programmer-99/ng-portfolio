import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { initializeApp } from 'firebase/app'; 
import { getFirestore, doc, updateDoc, increment, getDoc } from 'firebase/firestore'; 
import { firebaseConfig } from './firebase-config';
import { getAnalytics, logEvent } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  private app = initializeApp(firebaseConfig); 
  private firestore = getFirestore(this.app); 
  private analytics = getAnalytics(this.app); 
  viewCount: number = 0;

  constructor() {}

  ngOnInit() {
    this.incrementViewCount();
    this.fetchViewCount();
    logEvent(this.analytics, 'view_portfolio'); 
  }

  incrementViewCount() {
    const viewsRef = doc(this.firestore, 'views/portfolio');
    updateDoc(viewsRef, {
      count: increment(1) 
    }).then(() => {
      console.log('View count updated');
    }).catch((error) => {
      console.error('Error updating view count: ', error);
    });
  }

  fetchViewCount() {
    const viewsRef = doc(this.firestore, 'views/portfolio');
    getDoc(viewsRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        this.viewCount = docSnapshot.data()?.['count']; 
      }
    }).catch((error) => {
      console.error('Error fetching view count: ', error);
    });
  }
}

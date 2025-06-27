import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  typedText: string = ''; // The text to be typed
  textWidth: number = 0;  // To adjust the width dynamically
  fullText: string = "I’m a frontend developer specializing in building beautiful, performant apps with Angular."; // Full text
  textIndex: number = 0;  // To track the typing progress

  ngOnInit() {
    this.typeText();
  }

  // Type the text one character at a time with a delay
  typeText() {
    const typingSpeed = 50;  // Faster typing speed (lower number = faster)
    const widthMultiplier = 20;  // Adjust this multiplier to make the width grow faster
  
    const interval = setInterval(() => {
      if (this.textIndex < this.fullText.length) {
        this.typedText += this.fullText[this.textIndex];  // Add the next character
        this.textIndex++;
        this.textWidth = this.textIndex * widthMultiplier;  // Dynamically adjust width
      } else {
        clearInterval(interval);  // Stop the typing effect once done
      }
    }, typingSpeed);
  }
}

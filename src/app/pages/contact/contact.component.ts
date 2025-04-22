import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ViewChild } from '@angular/core';
import { ToastComponent } from '../../shared/components/toast/toast.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild(ToastComponent) toast!: ToastComponent;

  name = '';
  email = '';
  message = '';

  submitForm() {
    if (!this.name || !this.email || !this.message) {
      this.toast.show('Please fill out all fields.','error');
      return;
    }

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    emailjs.send(
      'service_6v37gl8',         
      'template_cvzay9b',        
      templateParams,
      'RVlfUzyucct0ByWwB'     
    ).then(() => {
      this.toast.show('✅ Message sent successfully!','success');
      this.name = '';
      this.email = '';
      this.message = '';
    }).catch((error) => {
      console.error('❌ EmailJS Error:', error);
      this.toast.show('⚠️ Message failed to send. Please try again.','error');
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message = '';
  toastType = signal<'success' | 'error'>('success');
  visible = signal(false);

  show(msg: string, type: 'success' | 'error' = 'success', duration = 3000) {
    this.message = msg;
    this.toastType.set(type);
    this.visible.set(true);

    setTimeout(() => {
      this.visible.set(false);
    }, duration);
  }
}

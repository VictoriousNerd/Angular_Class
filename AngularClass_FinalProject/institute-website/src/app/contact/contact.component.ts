import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  model: any = {};
  successMessage: string | null = null;
  errorMessage: string | null = null;

  onSubmit(): void {
    if (this.model) {
      this.sendEmail(this.model);
    } else {
      this.errorMessage = "There was an error with the form submission.";
    }
  }

  sendEmail(data: any): void {

    const emailSent = true;

    if (emailSent) {
      this.successMessage = 'Your message has been sent successfully!';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Failed to send your message. Please try again';
      this.successMessage = null;
    }
  }
}

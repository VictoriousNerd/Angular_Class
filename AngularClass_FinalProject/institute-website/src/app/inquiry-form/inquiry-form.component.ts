import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent {
  @Input() courseId!: number;
  inquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question: ['', Validators.required]
    });
  }

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

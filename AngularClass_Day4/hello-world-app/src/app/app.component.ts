import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messageVisible = false;
  toggleMessage() {
    this.messageVisible = !this.messageVisible;
  }
}

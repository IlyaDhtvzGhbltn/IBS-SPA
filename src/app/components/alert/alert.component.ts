import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  protected isVisible: boolean = false;

  show(): void {
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000); // Hide alert after 3 sec
  }
}

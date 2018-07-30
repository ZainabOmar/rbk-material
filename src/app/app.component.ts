import { Component } from '@angular/core';
import { WOW } from 'wowjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wow = new WOW();

  constructor() {
    this.wow.init();
  }


}
